import React, { createContext, useState } from 'react'
import { DEFAULT_LANGUAGE, translations } from './translations'
import { useStore } from '../store/rootStore'

export const LocalizationContext = createContext({
  translations,
  setAppLanguage: (_language: string) => {},
  appLanguage: DEFAULT_LANGUAGE,
})

export const LocalizationProvider = ({ children }: any) => {
  const store = useStore()
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE)

  const setLanguage = (language: string) => {
    translations.setLanguage(language)
    store.changeLanguage(language)
    setAppLanguage(language)
  }

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        setAppLanguage: setLanguage,
        appLanguage,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  )
}
