enum DatePatter {
    YEAR_MONTH_DAY = 'yyyy-MM-dd',
    YEAR_MONTH = 'yyyy-MM'
}

enum Error {
    SELECTED_DAY = 'SELECTED_DAY'
}
const EighteenMonths = 366 * 1.5;
const DayInMilliSecs = 24 * 60 * 60 * 1000;
const DayInSecs = 24 * 60 * 60;
const EighteenMonthsSecs = DayInSecs * EighteenMonths
const ForteenDaysSecs = DayInSecs * 14

const iconSize = 32;

const languageList: Record<string, string> = { en: 'english', rus: 'русский' }

export {DatePatter, DayInMilliSecs, DayInSecs, EighteenMonthsSecs, ForteenDaysSecs,languageList, Error, iconSize}
