import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TodayScreen = observer(() => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => null}>
        <Text>Today</Text>
      </TouchableOpacity>
    </View>
  )
})

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
