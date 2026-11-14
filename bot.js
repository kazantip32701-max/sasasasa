require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const questionsData = require('./questions');

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error('Укажи BOT_TOKEN в .env');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

const userSessions = {}; // userId -> { questions, current, correct, wrong, answers }

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startTest(chatId, userId) {
  const shuffled = shuffle(questionsData).slice(0, 30);
  userSessions[userId] = {
    questions: shuffled,
    current: 0,
    correct: 0,
    wrong: 0
  };
  sendQuestion(chatId, userId);
}

async function sendQuestion(chatId, userId) {
  const session = userSessions[userId];
  if (!session || session.current >= 30) {
    finishTest(chatId, userId);
    return;
  }

  const q = session.questions[session.current];
  const text = `📍 ${q.location}\n\n${q.question}\n\nВопрос ${session.current + 1} из 30`;

  const keyboard = {
    inline_keyboard: [
      [
        { text: '✅ Да', callback_data: 'yes' },
        { text: '❌ Нет', callback_data: 'no' }
      ]
    ]
  };

  try {
    await bot.sendPhoto(chatId, q.image, {
      caption: text,
      reply_markup: keyboard
    });
  } catch (e) {
    // Если фото не загрузилось — отправляем без фото
    await bot.sendMessage(chatId, text + '\n\n(фото временно недоступно)', {
      reply_markup: keyboard
    });
  }
}

function finishTest(chatId, userId) {
  const session = userSessions[userId];
  if (!session) return;

  const wrong = session.wrong;
  if (wrong >= 10) {
    bot.sendMessage(chatId, `❌ Тест не сдан. Неправильных ответов: ${wrong} из 30.\n\nТест перезапускается...`, {
      reply_markup: { inline_keyboard: [[{ text: '🔄 Начать заново', callback_data: 'restart' }]] }
    });
    delete userSessions[userId];
  } else {
    bot.sendMessage(chatId, `🎉 Поздравляем! Тест сдан!\n\nПравильных ответов: ${session.correct} из 30.\n\nОтправь свой кошелёк USDT (TRC20) — тебя ожидает награда в 20 долларов.`, {
      reply_markup: { remove_keyboard: true }
    });
    delete userSessions[userId];
  }
}

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Это тест по ПДД Дёмского района Уфы и окрестностей.\n\n30 вопросов с фотографиями реальных ситуаций.\nЕсли 10 и более ошибок — тест перезапускается.\n\nНажми кнопку, чтобы начать:', {
    reply_markup: {
      inline_keyboard: [[{ text: '🚦 Начать тестирование', callback_data: 'start_test' }]]
    }
  });
});

bot.on('callback_query', async (query) => {
  const chatId = query.message.chat.id;
  const userId = query.from.id;
  const data = query.data;

  await bot.answerCallbackQuery(query.id);

  if (data === 'start_test' || data === 'restart') {
    startTest(chatId, userId);
    return;
  }

  const session = userSessions[userId];
  if (!session) return;

  const q = session.questions[session.current];
  const userAnswer = data === 'yes';
  const isCorrect = userAnswer === q.correct;

  if (isCorrect) {
    session.correct++;
    await bot.sendMessage(chatId, `✅ Верно!\n${q.explanation || ''}`);
  } else {
    session.wrong++;
    await bot.sendMessage(chatId, `❌ Неверно.\nПравильный ответ: ${q.correct ? 'Да' : 'Нет'}\n${q.explanation || ''}`);
  }

  session.current++;
  setTimeout(() => sendQuestion(chatId, userId), 800);
});

bot.on('message', (msg) => {
  if (msg.text && !msg.text.startsWith('/')) {
    // Можно ловить кошелёк здесь
    bot.sendMessage(msg.chat.id, 'Спасибо! Кошелёк получен. Награда будет отправлена после проверки.');
  }
});

console.log('PDD Bot запущен...');
