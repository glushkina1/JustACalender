import { lightTheme } from './globalColors'

export interface DayStyle {
  textColor: string
  color: string
  startingDay?: boolean
  endingDay?: boolean
}

export const firstDayStyle: DayStyle = { color: lightTheme.colors.background, startingDay: true, textColor: 'black'}
export const lastDayStyle: DayStyle = { color: lightTheme.colors.background, endingDay: true, textColor: 'black' }
export const remainingDayStyle: DayStyle = { color: lightTheme.colors.background, textColor: 'black' }
