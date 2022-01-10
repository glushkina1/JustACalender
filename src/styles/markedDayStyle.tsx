import { lightTheme } from './globalColors'

export interface DayStyle {
  color: string
  startingDay?: boolean
  endingDay?: boolean
}

export const firstDayStyle: DayStyle = { color: lightTheme.background, startingDay: true }
export const lastDayStyle: DayStyle = { color: lightTheme.background, endingDay: true }
export const remainingDayStyle: DayStyle = { color: lightTheme.background }
