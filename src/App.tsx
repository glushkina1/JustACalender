import React from 'react'
import { StyleSheet, View } from 'react-native'
import {rootStore, StoreProvider} from './store'

import Tabs from './Tabs'

const App = () => {
  return (
    <StoreProvider value={rootStore}>
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
