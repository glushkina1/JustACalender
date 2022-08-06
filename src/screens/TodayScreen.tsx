import { NavigationState } from '@react-navigation/native'
import { format } from 'date-fns'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import { NavigationScreenProp } from 'react-navigation'

import { DatePatter } from '../constants'
import { addNewPeriod } from '../functions/addNewPeriod'
import { toLocaleDateToday } from '../functions/toLocaleDate'
import { LocalizationContext } from '../locale/LocalizationContext'
import { useStore } from '../store/rootStore'
import { makeGlobalStyles } from '../styles/globalStyles'

export interface IProps {
  navigation: NavigationScreenProp<NavigationState>
}

const TodayScreen = observer(({ navigation }: IProps) => {
  const store = useStore()
  const currentLanguage = store.language
  const { colors } = useTheme()
  const styles = makeStyles(colors)
  const globalStyles = makeGlobalStyles(colors)

  const now = new Date()
  const todayDate = toLocaleDateToday(now, currentLanguage)
  const { translations } = useContext(LocalizationContext)

  const periodStarts = () => {
    const formattedDate = format(now, DatePatter.YEAR_MONTH_DAY)
    addNewPeriod(formattedDate, store)
    navigation.navigate('Calendar')
  }

  const number = 12
  const ovNumber = 17

  return (
    <View style={styles.container}>
      <View style={styles.todayContainer}>
        <Text style={[globalStyles.text, styles.todayText]}>
          {translations.todayIs} {todayDate}
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.periodContainer}>
          <View style={styles.periodTextContainer}>
            <Text style={[globalStyles.text, styles.periodText]}>{translations.period}</Text>
          </View>
          <View style={styles.periodDaysLeftContainer}>
            <Text style={[globalStyles.text, styles.daysLeftText]}>
              {number} {translations.daysLeft}
            </Text>
          </View>
        </View>
        <Text style={[globalStyles.text, styles.ovulationText]}>
          {translations.ovulation} {ovNumber} {translations.daysLeft}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => periodStarts()}>
          <Text style={globalStyles.text}>{translations.periodStartsToday}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
})

const makeStyles = (colors: ReactNativePaper.ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    buttonContainer: {
      flex: 1,
    },
    todayContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    mainContainer: {
      width: '100%',
      justifyContent: 'center',
      flex: 2,
    },
    periodContainer: {
      padding: 20,
      borderColor: 'red',
      borderWidth: 1,
      marginBottom: 30,
    },
    periodTextContainer: {
      paddingLeft: 50,
      alignItems: 'flex-start',
    },
    periodDaysLeftContainer: {
      paddingRight: 50,
      alignItems: 'flex-end',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#cb5f5f',
      borderRadius: 10,
      padding: 27,
      elevation: 2,
    },
    daysLeftText: {
      fontSize: 45,
      fontFamily: 'YanoneKaffeesatz-Bold',
      letterSpacing: 1.5,
    },
    ovulationText: {
      fontSize: 33,
      letterSpacing: 2,
    },
    periodText: {
      fontFamily: 'YanoneKaffeesatz-Light',
      fontSize: 40,
    },
    todayText: {
      fontSize: 33,
      letterSpacing: 2,
    },
  })

export { TodayScreen }
