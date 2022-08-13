import {format, fromUnixTime} from "date-fns"
import {DatePatter, DayInSecs, EighteenMonthsSecs} from "../constants"

const predicateNext18Months = (lastPeriod: string, cycleLength: number, periodLength: number) => {
    let next18Months: string[][] = []
    const cycleLengthTimestamp = (cycleLength - periodLength + 1) * DayInSecs
    const periodLengthTimestamp = (periodLength - 1) * DayInSecs

    const lastPeriodSecs = new Date(lastPeriod).getTime() / 1000
    let predictedPeriodStarts = lastPeriodSecs + cycleLengthTimestamp
    const predictedPeriodEnds = lastPeriodSecs + EighteenMonthsSecs

    while (predictedPeriodStarts <= predictedPeriodEnds) {
        const firstDay = fromUnixTime(predictedPeriodStarts);
        const lastDay = fromUnixTime(predictedPeriodStarts + periodLengthTimestamp)
        const formattedFirstDay = format(firstDay, DatePatter.YEAR_MONTH_DAY)
        const formattedLastDay = format(lastDay, DatePatter.YEAR_MONTH_DAY)
        next18Months.push([formattedFirstDay, formattedLastDay])
        predictedPeriodStarts += cycleLengthTimestamp
    }
    return next18Months
}

export { predicateNext18Months }
