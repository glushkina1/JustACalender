import React from 'react'
import { StyleSheet, View } from 'react-native'
import {periodStore, StoreProvider} from './store'

import Tabs from './components/Tabs'

const App = () => {
  return (
    <StoreProvider value={periodStore}>
      <View style={styles.container}>
        <Tabs />
      </View>
    </StoreProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export { App }
