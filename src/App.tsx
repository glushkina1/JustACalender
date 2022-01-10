import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { periodStore, StoreProvider, trunk } from './store'
import { Provider as PaperProvider } from 'react-native-paper'

import Tabs from './components/Tabs'
import { darkTheme, lightTheme } from './styles/globalColors'
import {observer} from "mobx-react-lite";

const App = observer(({}) => {
  const [isStoreLoaded, setIsStoreLoaded] = useState(false)

console.log('RENDER')
  useEffect(() => {
    const rehydrate = async () => {
      await trunk.init()
      setIsStoreLoaded(true)
    }
    rehydrate().catch(() => console.log('problems with localStorage'))
  }, [periodStore.periods])

  if (!isStoreLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  } else {
    return (
      <StoreProvider value={periodStore}>
        <PaperProvider theme={periodStore.isDarkMode ? darkTheme : lightTheme}>
          <View style={styles.container}>
            <Tabs />
          </View>
        </PaperProvider>
      </StoreProvider>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export { App }
