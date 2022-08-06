import { format } from 'date-fns'

import { DatePatter, DayInMilliSecs } from '../constants'

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

export { getRemainingDates }
