import AsyncStorage from '@react-native-async-storage/async-storage'
import {makeAutoObservable} from 'mobx'
import {AsyncTrunk} from 'mobx-sync'
import {createContext, useContext} from 'react'

import {DayStyle} from '../styles/markedDayStyle'


export interface IRootStore {
    isDarkMode: boolean,
    periods: Record<string, DayStyle>,
    language: string,
    periodLength: number,
    cycleLength: number,
    userName: string,
    changeLanguage: (language: string) => void,
    resetEverything: () => void,
    toggleDarkMode: () => void,
    changeUserName: (name: string) => void,
    changePeriodLength: (period: number) => void,
    changeCycleLength: (cycle: number) => void,
}

export const rootStore = makeAutoObservable({
    isDarkMode: false,
    periods: {},
    language: 'en',
    periodLength: 5,
    cycleLength: 26,
    userName: 'SOFIA',
    changeUserName(name: string) {
        this.userName = name
    },
    changeLanguage(lang: string) {
        this.language = lang
    },
    changePeriodLength(period: number) {
        this.periodLength = period
    },
    changeCycleLength(cycle: number) {
        this.cycleLength = cycle
    },
    resetEverything() {
        this.periods = {}
    },
    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode
    },
} as IRootStore)

export const trunk = new AsyncTrunk(rootStore, {
    storage: AsyncStorage,
})
export const StoreContext = createContext(rootStore)
export const StoreProvider = StoreContext.Provider
export const useStore = () => useContext(StoreContext)
