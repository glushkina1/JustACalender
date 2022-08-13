import AsyncStorage from '@react-native-async-storage/async-storage'
import {makeAutoObservable} from 'mobx'
import {AsyncTrunk} from 'mobx-sync'
import {createContext, useContext} from 'react'


export interface IRootStore {
    isDarkMode: boolean,
    historyPeriods: string[][],
    predictedPeriods: string[][],
    language: string,
    periodLength: number,
    cycleLength: number,
    userName: string,
    nextOvulationStart: string,
    nextPeriodStart: string,
    changeLanguage: (language: string) => void,
    resetEverything: () => void,
    toggleDarkMode: () => void,
    changeUserName: (name: string) => void,
    changePeriodLength: (period: number) => void,
    changeCycleLength: (cycle: number) => void,
    addPeriod: (period: string[][]) => void,
    changePredictedPeriods: (period: string[][]) => void,
    changeNextPeriodStart: (periodStart: string) => void,
    changeNextOvulationStart: (ovulationStart: string) => void,
}

export const rootStore = makeAutoObservable({
    isDarkMode: false,
    historyPeriods: [],
    language: 'en',
    predictedPeriods: [],
    nextOvulationStart: '01-01-2022',
    nextPeriodStart:'01-01-2022',
    periodLength: 5,
    cycleLength: 26,
    userName: 'USER NAME',
    addPeriod(newHistoryPeriod: string[][]) {
        this.historyPeriods = newHistoryPeriod
    },
    changeNextPeriodStart(nextPeriodStart: string) {
        this.nextPeriodStart = nextPeriodStart
    },
    changeNextOvulationStart(nextOvulationStart: string) {
        this.nextOvulationStart = nextOvulationStart
    },
    changePredictedPeriods(predictedPeriods: string[][]) {
        this.predictedPeriods = predictedPeriods
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
        this.predictedPeriods = []
        this.nextOvulationStart = ''
        this.nextPeriodStart = ''
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
