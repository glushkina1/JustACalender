import { makeAutoObservable } from 'mobx'
import { createContext, useContext } from 'react'

import { remainingDayStyle, lastDayStyle, firstDayStyle, DayStyle } from '../styles/markedDayStyle'

const period: Record<string, DayStyle> = {
  '2022-01-16': firstDayStyle,
  '2022-01-17': remainingDayStyle,
  '2022-01-18': lastDayStyle,
}

export const periodStore = makeAutoObservable({
  periods: period,
})

export const StoreContext = createContext(periodStore)
export const StoreProvider = StoreContext.Provider
export const useStore = () => useContext(StoreContext)
