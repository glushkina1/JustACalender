import AsyncStorage from '@react-native-async-storage/async-storage'
import {makeAutoObservable} from 'mobx'
import {AsyncTrunk} from 'mobx-sync'
import {createContext, useContext} from 'react'


export interface IRootStore {
    isDarkMode: boolean,
    historyPeriods: Array<string> | never[],
    predictedPeriods: Array<string> | never[],
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
    addPeriod: (period: any) => void,
}

export const rootStore = makeAutoObservable({
    isDarkMode: false,
    historyPeriods: [],
    predictedPeriods: [],
    language: 'en',
    periodLength: 5,
    cycleLength: 26,
    userName: 'SOFIA',
    addPeriod(newHistoryPeriod: any) {
        this.historyPeriods = newHistoryPeriod
    },
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
        this.historyPeriods = []
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
