import { createContext, useContext } from 'react'
import { makeAutoObservable } from 'mobx'
import { AsyncTrunk } from 'mobx-sync'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { DayStyle } from '../styles/markedDayStyle'

const period: Record<string, DayStyle> = {}

export const rootStore = makeAutoObservable({
  isDarkMode: false,
  periods: period,
  language: 'en',
  periodLength: 5,
  cycleLength: 26,
  changeLanguage(lang: string) {
    this.language = lang
  },
  resetEverything() {
    this.periods = {}
  },
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode
  },
})

export const trunk = new AsyncTrunk(rootStore, {
  storage: AsyncStorage,
})
export const StoreContext = createContext(rootStore)
export const StoreProvider = StoreContext.Provider
export const useStore = () => useContext(StoreContext)
