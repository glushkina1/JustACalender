import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TodayScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Today Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8FF',
  },
  calendar: {
    width: 300,
    height: 300,
  },
})

export { TodayScreen }
