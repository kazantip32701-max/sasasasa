// Вопросы ПДД с локациями Дёмского района и окрестностей Уфы
// image — публичные URL дорожных ситуаций (можно заменить на свои с Яндекс.Панорам)

module.exports = [
  {
    location: "Дёмское шоссе, Дёмский район",
    question: "Можно ли выполнить обгон грузового автомобиля в данной ситуации?",
    image: "https://thumbs.dreamstime.com/b/russia-samara-june-prohibited-overtaking-truck-pedestrian-crossing-169939763.jpg",
    correct: false,
    explanation: "Обгон запрещён на пешеходном переходе и при ограниченной видимости."
  },
  {
    location: "ул. Колпинская, Дёмский район",
    question: "Разрешён ли поворот налево на этом перекрёстке?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Traffic_light.jpg/640px-Traffic_light.jpg",
    correct: true,
    explanation: "При отсутствии запрещающих знаков и разметки поворот разрешён."
  },
  {
    location: "Дёмский тракт",
    question: "Можно ли остановиться на обочине в этом месте?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Russian_road.jpg/640px-Russian_road.jpg",
    correct: false,
    explanation: "Остановка запрещена ближе 5 метров от перекрёстка / в зоне действия знака."
  },
  {
    location: "село Нагаево",
    question: "Разрешён ли обгон в населённом пункте на этой дороге?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Village_road.jpg/640px-Village_road.jpg",
    correct: false,
    explanation: "В населённом пункте обгон часто ограничен знаком или разметкой."
  },
  {
    location: "село Полгаково",
    question: "Можно ли повернуть направо, не останавливаясь?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Give_way_sign.jpg/640px-Give_way_sign.jpg",
    correct: false,
    explanation: "Знак «Уступите дорогу» обязывает уступить."
  },
  {
    location: "село Сергеевка",
    question: "Разрешено ли движение прямо?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/No_entry.jpg/640px-No_entry.jpg",
    correct: false,
    explanation: "Знак «Въезд запрещён»."
  },
  {
    location: "Дёмское шоссе",
    question: "Можно ли начать обгон перед пешеходным переходом?",
    image: "https://thumbs.dreamstime.com/b/russia-samara-june-prohibited-overtaking-truck-pedestrian-crossing-169939763.jpg",
    correct: false,
    explanation: "Обгон на пешеходном переходе и непосредственно перед ним запрещён."
  },
  {
    location: "Флотский переулок, Дёмский район",
    question: "Разрешён ли разворот в этом месте?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/U_turn_sign.jpg/640px-U_turn_sign.jpg",
    correct: true,
    explanation: "При отсутствии запрещающих знаков разворот разрешён."
  },
  {
    location: "мост через реку Дёма",
    question: "Можно ли обгонять на мосту?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Ufa_river_view.JPG/640px-Ufa_river_view.JPG",
    correct: false,
    explanation: "На мостах обгон запрещён."
  },
  {
    location: "Дёмский район, въезд в город",
    question: "Обязан ли водитель уступить дорогу пешеходу?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pedestrian_crossing.jpg/640px-Pedestrian_crossing.jpg",
    correct: true,
    explanation: "На пешеходном переходе водитель обязан уступить."
  },
  // Дополнительные вопросы для разнообразия (повторяем с разными локациями)
  {
    location: "ул. Авроры, Дёмский район",
    question: "Можно ли выполнить обгон, если видимость менее 100 метров?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Limited_visibility.jpg/640px-Limited_visibility.jpg",
    correct: false,
    explanation: "Обгон запрещён при ограниченной видимости."
  },
  {
    location: "село Нагаево, главная дорога",
    question: "Имеет ли преимущество водитель на главной дороге?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Main_road_sign.jpg/640px-Main_road_sign.jpg",
    correct: true,
    explanation: "Знак «Главная дорога» даёт преимущество."
  },
  {
    location: "Дёмское шоссе, ремонт",
    question: "Разрешено ли обгонять в зоне дорожных работ?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Road_works.jpg/640px-Road_works.jpg",
    correct: false,
    explanation: "В зоне дорожных работ обгон часто запрещён."
  },
  {
    location: "село Сергеевка, перекрёсток",
    question: "Можно ли повернуть налево при жёлтом сигнале светофора?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Traffic_light.jpg/640px-Traffic_light.jpg",
    correct: false,
    explanation: "Жёлтый сигнал запрещает движение (кроме случаев, когда остановиться невозможно)."
  },
  {
    location: "Полгаково, населённый пункт",
    question: "Разрешена ли остановка на проезжей части?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/No_stopping.jpg/640px-No_stopping.jpg",
    correct: false,
    explanation: "Знак «Остановка запрещена»."
  },
  {
    location: "Дёмский район, выезд из двора",
    question: "Обязан ли водитель, выезжающий из двора, уступить дорогу?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Give_way_sign.jpg/640px-Give_way_sign.jpg",
    correct: true,
    explanation: "При выезде из двора всегда уступаем дорогу."
  },
  {
    location: "ул. Колпинская",
    question: "Можно ли двигаться по полосе для маршрутных транспортных средств?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bus_lane.jpg/640px-Bus_lane.jpg",
    correct: false,
    explanation: "Движение по выделенной полосе запрещено обычным автомобилям."
  },
  {
    location: "Дёмское шоссе, крутой поворот",
    question: "Разрешён ли обгон на крутом повороте?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Sharp_turn.jpg/640px-Sharp_turn.jpg",
    correct: false,
    explanation: "На опасных поворотах обгон запрещён."
  },
  {
    location: "село Нагаево, грунтовая дорога",
    question: "Можно ли обгонять, если нет сплошной линии?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Country_road.jpg/640px-Country_road.jpg",
    correct: true,
    explanation: "При отсутствии запрещающих знаков и разметки обгон разрешён, если безопасно."
  },
  {
    location: "Сергеевка, знак 3.20",
    question: "Действует ли запрет обгона до конца населённого пункта?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/No_overtaking.jpg/640px-No_overtaking.jpg",
    correct: true,
    explanation: "Знак 3.20 действует до конца населённого пункта или до знака отмены."
  },
  {
    location: "Дёмский район, перекрёсток равнозначных дорог",
    question: "Кто имеет преимущество на перекрёстке равнозначных дорог?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Equal_roads.jpg/640px-Equal_roads.jpg",
    correct: false,
    explanation: "Преимущество у того, кто справа (правило помехи справа)."
  },
  {
    location: "мост через Дёму",
    question: "Можно ли останавливаться на мосту?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Ufa_river_view.JPG/640px-Ufa_river_view.JPG",
    correct: false,
    explanation: "Остановка на мостах запрещена."
  },
  {
    location: "Дёмское шоссе, конец подъёма",
    question: "Разрешён ли обгон в конце подъёма?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Hill_road.jpg/640px-Hill_road.jpg",
    correct: false,
    explanation: "В конце подъёма обгон запрещён из-за ограниченной видимости."
  },
  {
    location: "село Полгаково, пешеходный переход",
    question: "Можно ли обгонять на нерегулируемом пешеходном переходе?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pedestrian_crossing.jpg/640px-Pedestrian_crossing.jpg",
    correct: false,
    explanation: "Обгон на пешеходных переходах запрещён."
  },
  {
    location: "Дёмский район, жилая зона",
    question: "Разрешена ли скорость более 20 км/ч в жилой зоне?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Residential_area.jpg/640px-Residential_area.jpg",
    correct: false,
    explanation: "В жилой зоне максимальная скорость 20 км/ч."
  },
  {
    location: "ул. Колпинская, сплошная линия",
    question: "Можно ли пересекать сплошную линию разметки?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Solid_line.jpg/640px-Solid_line.jpg",
    correct: false,
    explanation: "Сплошную линию пересекать запрещено."
  },
  {
    location: "село Сергеевка, знак «Стоп»",
    question: "Обязан ли водитель полностью остановиться перед знаком «Стоп»?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Stop_sign.jpg/640px-Stop_sign.jpg",
    correct: true,
    explanation: "Знак 2.5 требует полной остановки."
  },
  {
    location: "Дёмское шоссе, две полосы",
    question: "Разрешено ли опережение справа по попутной полосе?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Multi_lane.jpg/640px-Multi_lane.jpg",
    correct: true,
    explanation: "Опережение по попутной полосе разрешено (это не обгон)."
  },
  {
    location: "Нагаево, железнодорожный переезд",
    question: "Можно ли обгонять ближе 100 метров до железнодорожного переезда?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Railway_crossing.jpg/640px-Railway_crossing.jpg",
    correct: false,
    explanation: "Обгон запрещён ближе 100 м до ж/д переезда."
  },
  {
    location: "Дёмский район, знак 5.15.1",
    question: "Можно ли повернуть налево с крайней правой полосы?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Lane_directions.jpg/640px-Lane_directions.jpg",
    correct: false,
    explanation: "Нужно занимать соответствующую полосу согласно знаку."
  }
];
