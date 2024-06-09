export const convertTempToRounded = (temperature: number) => {
  return Math.ceil(temperature);
};

export const convertDayToString = (day: number): string => {
  return (
    [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ][day] || ''
  );
};

export const convertToLocalTimestamp = (weather: number, time?: number) => {
  const timezoneOffset = new Date().getTimezoneOffset();
  const getTime = time ? time : new Date().getTime();
  const utcTime = getTime + timezoneOffset;
  const weatherOffset = weather;
  const localOffset = timezoneOffset * 60000;
  const offset = localOffset + weatherOffset;
  const localTime = utcTime + offset;
  const localHours = new Date(localTime).getHours();
  const localMinutes = new Date(localTime).getMinutes();

  return convertToAmPm(localHours, localMinutes);
};

export const convertToAmPm = (hour: number, minute: number) => {
  const period = hour >= 12 ? 'PM' : 'AM';
  const hours12 = hour % 12 || 12; // Converts 0 to 12 for midnight and 13 to 1 PM, etc.
  const formattedMinutes = String(minute).padStart(2, '0'); // Ensure minutes are two digits

  return `${hours12}:${formattedMinutes} ${period}`;
};
