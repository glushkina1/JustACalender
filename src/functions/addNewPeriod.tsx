import { addDays, format } from 'date-fns'
import { DatePatter } from '../constants'

import { useStore } from '../store/rootStore'

interface StoreProps {
  addPeriod: any
  historyPeriods: never[] | Array<string>
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



export const markedDates = () => {
  const store = useStore()
  return store.historyPeriods
}

export { addNewPeriod }
