import { addDays, format } from 'date-fns'
import { periodStore } from '../store'
import {firstDayStyle, remainingDayStyle, lastDayStyle} from '../styles/markedDayStyle'

const fillMarkedDays = (selectedDay: string) => {
  const { firstDay, lastDay }: { firstDay: string; lastDay: string } = getLastFirstDay(selectedDay)

  let period: string[] = getDatesBetween(firstDay, lastDay)

  if (period && firstDay && lastDay) {
    for (let i = 1; i < period.length - 1; i++) {
      periodStore.periods[period[i]] = remainingDayStyle
    }
    periodStore.periods[firstDay] = firstDayStyle
    periodStore.periods[lastDay] = lastDayStyle
  }
}

const getLastFirstDay = (selectedDay: string) => {
  const unformattedLastDay = addDays(new Date(selectedDay), 4)
  let lastDay = format(new Date(unformattedLastDay), 'yyyy-MM-dd')
  let firstDay = format(new Date(selectedDay), 'yyyy-MM-dd')

  return { firstDay, lastDay }
}

const getDatesBetween = (firstDay: string, lastDay: string) => {
  const dates = []
  let currentDateTimestamp = new Date(firstDay).getTime()
  let endDateTimestamp = new Date(lastDay).getTime()

  while (currentDateTimestamp <= endDateTimestamp) {
    dates.push(format(new Date(currentDateTimestamp), 'yyyy-MM-dd'))
    currentDateTimestamp += 24 * 60 * 60 * 1000
  }
  return dates
}

export const markedDates = () => {
  return periodStore.periods
}

export { fillMarkedDays }
