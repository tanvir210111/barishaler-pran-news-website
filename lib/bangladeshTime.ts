/**
 * Utility for formatting real-time Bangladesh Date & Clock
 * Standard: Asia/Dhaka timezone (BST / UTC+6)
 */

export const BENGALI_NUMERALS: Record<string, string> = {
  '0': '০',
  '1': '১',
  '2': '২',
  '3': '৩',
  '4': '৪',
  '5': '৫',
  '6': '৬',
  '7': '৭',
  '8': '৮',
  '9': '৯',
};

/**
 * Converts any number or numeric string to Bengali numerals
 */
export function toBengaliNumerals(input: number | string): string {
  return String(input).replace(/[0-9]/g, (digit) => BENGALI_NUMERALS[digit] ?? digit);
}

/**
 * Calculates the Bangla Academy official revised calendar date (বঙ্গাব্দ) for Bangladesh
 * Official rules (Bangla Academy 2019):
 * - 1 Boishakh = April 14
 * - Boishakh to Ashwin (first 6 months): 31 days
 * - Kartik, Agrahayan, Poush, Magh, Falgun (next 5 months): 30 days (Falgun is 31 in leap year)
 * - Chaitra: 30 days
 */
export function getBanglaAcademyDate(date: Date = new Date()): string {
  // Extract Dhaka local year, month (1-12), day (1-31)
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Dhaka',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(date);

  const year = parseInt(parts.find((p) => p.type === 'year')?.value || '2026', 10);
  const month = parseInt(parts.find((p) => p.type === 'month')?.value || '1', 10);
  const day = parseInt(parts.find((p) => p.type === 'day')?.value || '1', 10);

  const curDateUtc = new Date(Date.UTC(year, month - 1, day));
  const apr14Utc = new Date(Date.UTC(year, 3, 14)); // April is 0-indexed month 3

  let diffDays = Math.round((curDateUtc.getTime() - apr14Utc.getTime()) / 86400000);
  let banglaYear = year - 593;

  if (diffDays < 0) {
    // Before April 14 in current Gregorian year: belongs to previous Bangla year
    banglaYear = year - 594;
    const prevApr14Utc = new Date(Date.UTC(year - 1, 3, 14));
    diffDays = Math.round((curDateUtc.getTime() - prevApr14Utc.getTime()) / 86400000);
  }

  // Leap year calculation for the Gregorian year spanning Falgun
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  const monthDays = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, isLeap ? 31 : 30, 30];
  const monthNames = [
    'বৈশাখ',
    'জ্যৈষ্ঠ',
    'আষাঢ়',
    'শ্রাবণ',
    'ভাদ্র',
    'আশ্বিন',
    'কার্তিক',
    'অগ্রহায়ণ',
    'পৌষ',
    'মাঘ',
    'ফাল্গুন',
    'চৈত্র',
  ];

  let monthIndex = 0;
  while (monthIndex < 12 && diffDays >= monthDays[monthIndex]) {
    diffDays -= monthDays[monthIndex];
    monthIndex++;
  }

  const banglaDay = diffDays + 1;
  const banglaMonth = monthNames[monthIndex] || monthNames[0];

  return `${toBengaliNumerals(banglaDay)} ${banglaMonth} ${toBengaliNumerals(banglaYear)}`;
}

/**
 * Returns the full Bengali Gregorian date formatted in Asia/Dhaka timezone
 * e.g. "রবিবার, ১৮ অক্টোবর ২০২৬"
 */
export function getBengaliGregorianDate(date: Date = new Date()): string {
  const formatter = new Intl.DateTimeFormat('bn-BD', {
    timeZone: 'Asia/Dhaka',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return formatter.format(date).replace(/,/g, ',\u200B'); // subtle non-breaking break after comma
}

/**
 * Returns English date in Asia/Dhaka timezone
 * e.g. "Sunday, 18 October 2026"
 */
export function getEnglishDate(date: Date = new Date()): string {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Dhaka',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return formatter.format(date);
}

/**
 * Real-time Bangladesh clock snapshot
 */
export interface BangladeshClockSnapshot {
  timeBn: string;         // e.g. "০৭:৩৫:১২"
  periodBn: string;       // e.g. "অপরাহ্ন" or "পূর্বাহ্ন"
  fullDisplay: string;    // e.g. "০৭:৩৫:১২ অপরাহ্ন (বিএসটি)"
  rawDate: Date;
  dateKey: string;        // "YYYY-MM-DD" in Dhaka for detecting midnight change
}

export function getBangladeshClockSnapshot(date: Date = new Date()): BangladeshClockSnapshot {
  // Use Intl formatToParts in Asia/Dhaka
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Dhaka',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const hour = parts.find((p) => p.type === 'hour')?.value || '12';
  const minute = parts.find((p) => p.type === 'minute')?.value || '00';
  const second = parts.find((p) => p.type === 'second')?.value || '00';
  const dayPeriod = parts.find((p) => p.type === 'dayPeriod')?.value?.toUpperCase() || 'AM';

  const year = parts.find((p) => p.type === 'year')?.value || '2026';
  const month = parts.find((p) => p.type === 'month')?.value || '01';
  const day = parts.find((p) => p.type === 'day')?.value || '01';

  const timeBn = `${toBengaliNumerals(hour)}:${toBengaliNumerals(minute)}:${toBengaliNumerals(second)}`;
  const periodBn = dayPeriod === 'PM' ? 'অপরাহ্ন' : 'পূর্বাহ্ন';
  const fullDisplay = `${timeBn} ${periodBn} (বিএসটি)`;
  const dateKey = `${year}-${month}-${day}`;

  return {
    timeBn,
    periodBn,
    fullDisplay,
    rawDate: date,
    dateKey,
  };
}
