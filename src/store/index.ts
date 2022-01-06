import { ClassesStore } from './ClassesStore'
import { createContext, useContext } from 'react'

export class RootStore {
  classes: ClassesStore

  constructor() {
    this.classes = new ClassesStore()
  }
}

export const rootStore = new RootStore()
export const StoreContext = createContext(rootStore)
export const StoreProvider = StoreContext.Provider
export const useStore = () => useContext(StoreContext)
