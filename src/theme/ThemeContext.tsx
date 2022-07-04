// import React, { createContext, useState } from 'react'
//
// import { useStore } from '../store/rootStore'
//
//
// export const DEFAULT_THEME = 'light'
// // export themes =
//
// export const LocalizationContext = createContext({
//     translations,
//     setAppTheme: (_theme: string) => {},
//     appLanguage: DEFAULT_THEME,
// })
//
// export const LocalizationProvider = ({ children }: any) => {
//     const store = useStore()
//     const [appLanguage, setAppLanguage] = useState(DEFAULT_THEME)
//
//     const setLanguage = (language: string) => {
//         translations.setLanguage(language)
//         store.changeLanguage(language)
//         setAppLanguage(language)
//     }
//
//     return (
//         <LocalizationContext.Provider
//             value={{
//                 translations,
//                 setAppLanguage: setLanguage,
//                 appLanguage,
//             }}
//         >
//             {children}
//         </LocalizationContext.Provider>
//     )
// }
