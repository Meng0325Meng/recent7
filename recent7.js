function recent7(records, today) {
  const todayDate = new Date(today + 'T00:00:00Z');
  const startDate = new Date(todayDate.getTime() - 6 * 24 * 60 * 60 * 1000);
  const start = startDate.toISOString().slice(0, 10);

  let minutes = 0;
  let count = 0;

  for (const record of records) {
    if (record.log_date >= start && record.log_date <= today) {
      count += 1;
      minutes += record.minutes === null ? 0 : record.minutes;
    }
  }

  return { minutes, count };
}
