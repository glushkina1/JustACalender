import React, { useContext } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { useTheme } from 'react-native-paper'

import { LocalizationContext } from '../locale/LocalizationContext'

const WeekDays = () => {
  const { colors } = useTheme()
  const styles = makeStyles(colors)
  const { translations } = useContext(LocalizationContext)

  const weekDaysArray = [
    translations.mon,
    translations.tue,
    translations.wed,
    translations.thu,
    translations.fri,
    translations.sat,
    translations.sun,
  ]
  const weekDays = []

  for (let i = 0; i < weekDaysArray.length; i++) {
    weekDays.push(
      <View key={i} style={styles.weekDay}>
        <Text style={styles.text}>{weekDaysArray[i]}</Text>
      </View>,
    )
  }

  return <View style={styles.container}>{weekDays}</View>
}

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 3,
      paddingVertical: 7,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderColor: 'grey',
    },
    weekDay: {
      alignItems: 'center',
      width: Dimensions.get('window').width / 10,
    },
    text: {
      fontWeight: 'bold',
      color: colors.text,
    },
  })
export { WeekDays }
