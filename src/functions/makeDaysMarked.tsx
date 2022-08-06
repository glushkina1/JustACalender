import { DayStyle, firstDayStyle, lastDayStyle, remainingDayStyle } from '../styles/markedDayStyle'

import { getRemainingDates } from './getRemainingDates'

const makeDaysMarked = (periods: string[]) => {
  const markedPeriod: Record<string, DayStyle> = {}

  for (const period of periods) {
    const firstDay: string = period[0]
    const lastDay: string = period[1]
    const remainingDates: string[] | never[] = getRemainingDates(firstDay, lastDay)
    markedPeriod[firstDay] = firstDayStyle
    markedPeriod[lastDay] = lastDayStyle

    for (let j = 1; j < remainingDates.length - 1; j++) {
      markedPeriod[remainingDates[j]] = remainingDayStyle
    }
  }
  return markedPeriod
}

export { makeDaysMarked }
