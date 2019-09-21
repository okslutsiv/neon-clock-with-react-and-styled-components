export const phrases = [
  "NOW IT IS",
  "ABOUT",
  "NEARLY",
  "TEN",
  "QUARTER",
  "TWENTY",
  "FIVE",
  "HALF",
  "PAST",
  "TO",
  "ONE",
  "TWO",
  "THREE",
  "FOUR",
  "FIVE",
  "SIX",
  "SEVEN",
  "EIGHT",
  "NINE",
  "TEN",
  "ELEVEN",
  "NOON",
  "MIDNIGHT",
  "O' CLOCK",
  "IN THE",
  "MORNING",
  "AFTERNOON",
  "EVENING",
];

export function getHighlights(config) {
  return [
    true, // IT IS
    config.isAbout, // ABOUT
    config.isNearly, // NEARLY
    config.minutes === 10, // TEN
    config.minutes === 15, // QUARTER
    config.minutes === 20 || config.minutes === 25, // TWENTY
    config.minutes === 5 || config.minutes === 25, // FIVE
    config.minutes === 30, // HALF
    config.isPast, // PAST
    config.isTo, // TO
    config.hours === 1, // ONE
    config.hours === 2, // TWO
    config.hours === 3, // THREE
    config.hours === 4, // FOUR
    config.hours === 5, // FIVE
    config.hours === 6, // SIX
    config.hours === 7, // SEVEN
    config.hours === 8, // EIGHT
    config.hours === 9, // NINE
    config.hours === 10, // TEN
    config.hours === 11, // ELEVEN
    config.isNoon, // NOON
    config.isMidnight, // MIDNIGHT
    config.isOClock, // O' CLOCK
    config.isMorning || config.isAfternoon || config.isEvening, // IN THE
    config.isMorning, // MORNING
    config.isAfternoon, // AFTERNOON
    config.isEvening, // EVENING
  ];
}
export function getReadoutConfig({ hours, minutes, base = 5 }) {
  const lastBaseMark = Math.floor(minutes / base) * base;
  const distFromLast = minutes - lastBaseMark;
  const isExact = distFromLast === 0;
  const isNearly = !isExact && distFromLast > Math.floor(base / 2);
  const isAbout = !isExact && !isNearly;

  const nearestBaseMark = isNearly ? (lastBaseMark + base) % 60 : lastBaseMark;
  const isOClock = nearestBaseMark === 0;
  const isPast = !isOClock && nearestBaseMark <= 30;
  const isTo = !isOClock && !isPast;

  const minuteMark =
    isPast || isOClock ? nearestBaseMark : 60 - nearestBaseMark;
  const nearestHour = isTo || (isOClock && isNearly) ? (hours + 1) % 24 : hours;
  const nearest12Hour = nearestHour > 12 ? nearestHour - 12 : nearestHour;
  const isMidnight = nearestHour === 0;
  const isNoon = nearestHour === 12;
  const isMorning = !isMidnight && nearestHour < 12;
  const isAfternoon = nearestHour > 12 && nearestHour <= 18;
  const isEvening = !isMidnight && nearestHour > 18;

  return {
    isExact,
    isAbout,
    isNearly,

    minutes: minuteMark,
    isOClock: isOClock && !isNoon && !isMidnight,
    isPast,
    isTo,

    hours: nearest12Hour,
    isNoon,
    isMidnight,
    isMorning,
    isAfternoon,
    isEvening,
  };
}
