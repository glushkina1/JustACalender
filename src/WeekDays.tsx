import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { lightTheme } from './colors'

const WeekDays = () => {
  const weekDaysArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const weekDays = []

  for (let i = 0; i < 7; i++) {
    weekDays.push(
      <View key={i} style={styles.weekDay}>
        <Text style={styles.text}>{weekDaysArray[i]}</Text>
      </View>,
    )
  }

  return <View style={styles.container}>{weekDays}</View>
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 4,
    marginRight: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weekDay: {
    alignItems: 'center',
    width: Dimensions.get('window').width / 13,
  },
  text: {
    fontWeight:'bold',
    color: lightTheme.grey,
  }
})
export { WeekDays }
