import { createContext, useContext } from 'react'
import { makeAutoObservable } from 'mobx'
import { remainingDayStyle, lastDayStyle, firstDayStyle } from '../styles/markedDayStyle'

export const periodStore = makeAutoObservable({
  periods: {
    '2022-01-16': firstDayStyle,
    '2022-01-17': remainingDayStyle,
    '2022-01-18': lastDayStyle,
  },
})

export const StoreContext = createContext(periodStore)
export const StoreProvider = StoreContext.Provider
export const useStore = () => useContext(StoreContext)

