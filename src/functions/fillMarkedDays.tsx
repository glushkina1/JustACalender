import { addDays, format } from 'date-fns'

import { DatePatter, DayInMilliSecs } from '../constants'
import { useStore } from '../store/rootStore'
import { DayStyle, firstDayStyle, lastDayStyle, remainingDayStyle } from '../styles/markedDayStyle'

interface StoreProps {
  periods: Record<string, DayStyle>
}

const fillMarkedDays = (selectedDay: string, store: StoreProps) => {
  const { firstDay, lastDay }: { firstDay: string; lastDay: string } = getLastFirstDay(selectedDay)
  const period: string[] = getDatesBetween(firstDay, lastDay)

  if (period && firstDay && lastDay) {
    for (let i = 1; i < period.length - 1; i++) {
      store.periods[period[i]] = remainingDayStyle
    }
    store.periods[firstDay] = firstDayStyle
    store.periods[lastDay] = lastDayStyle
  }
}

const getLastFirstDay = (selectedDay: string) => {
  const unformattedLastDay = addDays(new Date(selectedDay), 4)
  const lastDay = format(new Date(unformattedLastDay), DatePatter.YEAR_MONTH_DAY)
  const firstDay = format(new Date(selectedDay), DatePatter.YEAR_MONTH_DAY)

  return { firstDay, lastDay }
}

const getDatesBetween = (firstDay: string, lastDay: string) => {
  const dates = []
  let currentDateTimestamp = new Date(firstDay).getTime()
  const endDateTimestamp = new Date(lastDay).getTime()

  while (currentDateTimestamp <= endDateTimestamp) {
    dates.push(format(new Date(currentDateTimestamp), DatePatter.YEAR_MONTH_DAY))
    currentDateTimestamp += DayInMilliSecs
  }
  return dates
}

export const markedDates = () => {
  const store = useStore()
  return store.periods
}

export { fillMarkedDays }
