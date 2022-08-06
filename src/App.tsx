import { NavigationContainer } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

import Tabs from './components/Tabs'
import { LocalizationProvider } from './locale/LocalizationContext'
import { translations } from './locale/translations'
import { StoreProvider, trunk, useStore } from './store/rootStore'
import { darkTheme, lightTheme } from './styles/globalColors'
import SplashScreen from "./screens/SplashScreen";

const App = observer(({}) => {
  const store = useStore()
  translations.setLanguage(store.language)

  const [isStoreLoaded, setIsStoreLoaded] = useState(false)

  useEffect(() => {
    const rehydrate = async () => {
      await trunk.init()
      setIsStoreLoaded(true)
    }
    rehydrate().catch(() => console.log('problems with localStorage'))
  }, [])

  if (!isStoreLoaded) {
    return (
      <View style={styles.indicator}>
        <SplashScreen />
      </View>
    )
  } else {
    return (
      <NavigationContainer>
        <StoreProvider value={store}>
          <LocalizationProvider>
            <PaperProvider theme={store.isDarkMode ? darkTheme : lightTheme}>
              <View style={styles.container}>
                <StatusBar animated barStyle={store.isDarkMode ? 'light-content' : 'dark-content'} />
                <Tabs />
              </View>
            </PaperProvider>
          </LocalizationProvider>
        </StoreProvider>
      </NavigationContainer>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export { App }
