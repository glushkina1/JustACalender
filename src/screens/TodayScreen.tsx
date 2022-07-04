import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from 'react-native-paper'

import { toLocaleDateToday } from '../functions/toLocaleDate'
import { LocalizationContext } from '../locale/LocalizationContext'

const TodayScreen = observer(({}) => {
  const { colors } = useTheme()
  const styles = makeStyles(colors)

  const now = new Date()
  const todayDate = toLocaleDateToday(now, 'en')
  const { translations } = useContext(LocalizationContext)

  return (
    <View style={styles.container}>
      <View style={styles.todayContainer}>
        <Text style={styles.text}>
          {translations.todayIs} {todayDate} {'\n'}
        </Text>
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.text}>Period</Text>
        <Text style={styles.text}>12 Days left{'\n'}</Text>
        <Text style={[styles.text, styles.textOvulation]}>Ovulation: 17 days left{'\n'}</Text>
      </View>

    </View>
  )
})

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    text: {
      alignSelf: 'center',
      fontSize: 22,
      color: colors.text,
    },
    textOvulation: {
      fontSize: 17,
    },
    todayContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    mainContainer: {
      justifyContent: 'center',
      flex: 4,
      // borderColor: 'green',
      // borderWidth: 1,
    },
  })

export { TodayScreen }
