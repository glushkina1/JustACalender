import React from 'react'
import { StyleSheet, View } from 'react-native'

import Tabs from './Tabs'

const App = () => {

  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export { App }
