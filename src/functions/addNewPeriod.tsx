import { addDays, format } from 'date-fns'

import { DatePatter } from '../constants'

interface StoreProps {
  addPeriod: any
  historyPeriods: never[] | string[]
}

const addNewPeriod = (selectedDay: string, store: StoreProps) => {
  const lastDay = getLastDay(selectedDay)
  const newPeriod = [selectedDay, lastDay]
  if (newPeriod.length > 1) {
    const newHistoryPeriod = [...store.historyPeriods, newPeriod]
    store.addPeriod(newHistoryPeriod)
  }
}

const getLastDay = (selectedDay: string) => {
  const unformattedLastDay = addDays(new Date(selectedDay), 4)
  const lastDay = format(new Date(unformattedLastDay), DatePatter.YEAR_MONTH_DAY)

  return lastDay
}

export { addNewPeriod }
