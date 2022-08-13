import {addDays, format, fromUnixTime} from 'date-fns'
import {DatePatter, ForteenDaysSecs} from "../constants"

import {IRootStore} from '../store/rootStore'
import { predicateNext18Months } from './predicateNext18Months'

const addNewPeriod = (dayFormatted: string, store: IRootStore) => {
    const now = new Date()
    const nowFormatted = format(now, DatePatter.YEAR_MONTH_DAY)
    const lastDay = getLastDay(dayFormatted)
    const newPeriod = [dayFormatted, lastDay]
    if (newPeriod.length > 1) {
        const newHistoryPeriod = [...store.historyPeriods, newPeriod]
        store.addPeriod(newHistoryPeriod)

        const predictedPeriods = predicateNext18Months(newPeriod[1],store.cycleLength, store.periodLength)
        store.changePredictedPeriods(predictedPeriods)

        const nextPredictedPeriod = predictedPeriods[0][0]
        store.changeNextPeriodStart(nextPredictedPeriod)

        const nextPredictedOvulation = getNextOvulation(nowFormatted, predictedPeriods)
        store.changeNextOvulationStart(nextPredictedOvulation)
    }
}


const getNextOvulation = (nowFormatted: any, predictedPeriods: any) => {
    const nowSecs = new Date(nowFormatted).getTime() / 1000
    const nextPeriodSecs = new Date(predictedPeriods[0][0]).getTime() / 1000
    const predictedNextOvulation = nextPeriodSecs - ForteenDaysSecs

    if (predictedNextOvulation >= nowSecs) {
        const ovulationDay = fromUnixTime(predictedNextOvulation)
        return format(ovulationDay, DatePatter.YEAR_MONTH_DAY)
    } else {
        const nextNextPeriodSecs = new Date(predictedPeriods[1][0]).getTime() / 1000
        const ovulationDay = fromUnixTime(nextNextPeriodSecs - ForteenDaysSecs)
        return format(ovulationDay, DatePatter.YEAR_MONTH_DAY)
    }
}


const getLastDay = (selectedDay: string) => {
    const unformattedLastDay = addDays(new Date(selectedDay), 4)
    const lastDay = format(new Date(unformattedLastDay), DatePatter.YEAR_MONTH_DAY)
    return lastDay
}


export {addNewPeriod}
