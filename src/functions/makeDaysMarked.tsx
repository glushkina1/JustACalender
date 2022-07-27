import { useStore } from "../store/rootStore"
import { DayStyle, firstDayStyle, lastDayStyle, remainingDayStyle } from '../styles/markedDayStyle'
import { DatePatter, DayInMilliSecs } from '../constants'
import {  format } from 'date-fns'

const makeDaysMarked = () => {

    let markedPeriod: Record<string, DayStyle>  = {}
    const store = useStore()
    const periods = store.historyPeriods

    for (let i = 0; i < periods.length; i++) {
        const firstDay: string = periods[i][0]
        const lastDay: string = periods[i][1]
        const remainingDates: Array<string> | never[] = getRemainingDates(firstDay, lastDay)
        markedPeriod[firstDay] = firstDayStyle
        markedPeriod[lastDay] = lastDayStyle

        for (let j = 1; j < remainingDates.length - 1; j++) {
            markedPeriod[remainingDates[j]] = remainingDayStyle
        }
    }
    return markedPeriod
}

const getRemainingDates = (firstDay: string, lastDay: string) => {
    const dates = []
    let startDateTimestamp = new Date(firstDay).getTime()
    const endDateTimestamp = new Date(lastDay).getTime()

    while (startDateTimestamp <= endDateTimestamp) {
        dates.push(format(new Date(startDateTimestamp), DatePatter.YEAR_MONTH_DAY))
        startDateTimestamp += DayInMilliSecs
    }
    return dates
}

export {makeDaysMarked}