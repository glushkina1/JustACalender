import { DarkTheme, DefaultTheme } from 'react-native-paper'

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      telegram: string;
      greyBlack: string;
      tab: string;
      tabsIcon: string;
      tabsActive: string,
      tabsInactive: string,
      calendar: string,
    }
  }
}
export const lightTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffd0d7',
    telegram: '#001f3f',
    greyBlack: 'black',
    tab:'#f6f6f6',
    tabsIcon:'#878787',
    tabsActive: '#f06292',
    tabsInactive: '#8a898a',
    calendar: 'white',
  },
}

export const darkTheme: ReactNativePaper.Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background:'#0d0d0d',
    telegram: '#001f3f',
    greyBlack: 'grey',
    tab:'#151515',
    tabsIcon:'#545454',
    tabsActive: 'white',
    tabsInactive: '#7b7b7b',
    calendar:'#666666',
  },
}

export const AdditionalColors = {
  lightGrey: '#DDD',
  background: '#ffd0d7',
  azure: '#007FFF',
  blue: '#0074D9',
  grey: '#6b6b6b',
  darkGrey: '#5a5a5a',
  olive: '#3D9970',
  navy: '#001f3f',
  aqua: '#7FDBFF',
  teal: '#39CCCC',
  marron: '#85144b',
  yellow: '#fff176',
  pink: '#880e4f',
  red: '#920717',
  lightBlue: '#5388ff',
  darkBlue: '#435898',
  darkYellow:'#b29a24',
}
