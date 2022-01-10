import { makeAutoObservable } from 'mobx'
import { AsyncTrunk } from 'mobx-sync'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useContext } from 'react'

export const periodStore = makeAutoObservable({
  isDarkMode: false,
  periods: {},
  // addRemainingDay(day: object) {
  //   this.periods = Object.assign(this.periods, day);
  // },
  resetEverything() {
    this.periods = {}
  },
  darkMode() {
    this.isDarkMode = true
  },
  lightMode() {
    this.isDarkMode = false
  },
})

export const trunk = new AsyncTrunk(periodStore, {
  storage: AsyncStorage,
})
export const StoreContext = createContext(periodStore)
export const StoreProvider = StoreContext.Provider
export const useStore = () => useContext(StoreContext)
