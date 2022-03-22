enum DatePatter {
    YEAR_MONTH_DAY = 'yyyy-MM-dd',
    YEAR_MONTH = 'yyyy-MM'
}

const DayInMilliSecs = 24 * 60 * 60 * 1000


const languageList: Record<string, string> = { en: 'english', rus: 'русский' }

export {DatePatter, DayInMilliSecs, languageList}
