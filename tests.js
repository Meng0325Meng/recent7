// 規則 1：最近 7 天包含今天和往前 6 天，兩端都包含。
addCase({
  name: '規則 1：計入起始日、今天，排除範圍外日期',
  today: '2026-11-23',
  records: [
    { log_date: '2026-11-16', minutes: 10 },
    { log_date: '2026-11-17', minutes: 20 },
    { log_date: '2026-11-23', minutes: 30 },
    { log_date: '2026-11-24', minutes: 40 }
  ],
  expect: { minutes: 50, count: 2 }
});

// 規則 2：範圍內的紀錄計入，範圍外的紀錄不計入。
addCase({
  name: '規則 2：只計入最近 7 天內的紀錄',
  today: '2026-11-23',
  records: [
    { log_date: '2026-11-18', minutes: 15 },
    { log_date: '2026-11-10', minutes: 25 },
    { log_date: '2026-12-01', minutes: 35 }
  ],
  expect: { minutes: 15, count: 1 }
});

// 規則 3：同一天的多筆紀錄分別計入筆數和分鐘數。
addCase({
  name: '規則 3：同一天多筆紀錄各自計入',
  today: '2026-11-23',
  records: [
    { log_date: '2026-11-20', minutes: 10 },
    { log_date: '2026-11-20', minutes: 25 },
    { log_date: '2026-11-20', minutes: 5 }
  ],
  expect: { minutes: 40, count: 3 }
});

// 規則 4：分鐘數為 null 的紀錄仍計入筆數，分鐘總數加 0。
addCase({
  name: '規則 4：null 分鐘仍計一筆且分鐘加零',
  today: '2026-11-23',
  records: [
    { log_date: '2026-11-22', minutes: 20 },
    { log_date: '2026-11-22', minutes: null },
    { log_date: '2026-11-22', minutes: null }
  ],
  expect: { minutes: 20, count: 3 }
});
