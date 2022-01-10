import { ExtendedTheme } from '@react-navigation/native'
import { DarkTheme, DefaultTheme } from 'react-native-paper'

export const lightTheme: ExtendedTheme = {
  dark: false,
    roundness:2,
  colors: {
    ...DefaultTheme.colors,
      background: '#ffd0d7',
      telegram:'#001f3f',
  },
    animation:'scale',
}

export const darkTheme: ExtendedTheme = {
    dark: true,
    roundness:10,
    colors: {
        ...DarkTheme.colors,
        telegram:'#001f3f',
    },
    animation:'scale',
}

export const AdditionalColors = {
    lightGrey: "#DDD",
    background: '#ffd0d7',
    azure: '#007FFF',
    blue: '#0074D9',
    grey: '#6b6b6b',
    olive: '#3D9970',
    navy: '#001f3f',
    aqua: '#7FDBFF',
    teal: '#39CCCC',
    marron: '#85144b',
}
