import { addMonths, addYears, subMonths, subYears } from 'date-fns'
import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import { toLocaleDateHeader } from '../functions/toLocaleDate'
import { translations } from '../locale/translations'
import { useStore } from '../store/rootStore'

import { WeekDays } from './WeekDays'

void Icons.loadFont()

interface CalendarHeaderProps {
  selectedDate: Date
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
  showJumpToday: boolean
  setShowJumpToday: React.Dispatch<React.SetStateAction<boolean>>
}

const CalendarHeader = ({ selectedDate, setSelectedDate, showJumpToday, setShowJumpToday }: CalendarHeaderProps) => {
  const store = useStore()
  const language = store.language
  const { colors } = useTheme()
  const styles = makeStyles(colors)
  const now = new Date()

  const jumpToToday = () => {
    setSelectedDate(now)
  }

  useEffect(() => {
    const nowMonth = now.getMonth()
    const currentMonth = selectedDate.getMonth()
    const nowYear = now.getFullYear()
    const currentYear = selectedDate.getFullYear()

    if (nowMonth === currentMonth && nowYear === currentYear) {
      setShowJumpToday(false)
    } else {
      setShowJumpToday(true)
    }
  }, [selectedDate])

  const onPressNextMonth = () => {
    setSelectedDate(addMonths(new Date(selectedDate), 1))
  }
  const onPressLastMonth = () => {
    setSelectedDate(subMonths(new Date(selectedDate), 1))
  }
  const onPressNextYear = () => {
    setSelectedDate(addYears(new Date(selectedDate), 1))
  }
  const onPressLastYear = () => {
    setSelectedDate(subYears(new Date(selectedDate), 1))
  }

  return (
    <View style={styles.wholeHeaderContainer}>
      <View style={styles.upperHeaderContainer}>
        <View style={styles.twoArrowContainer}>
          <TouchableOpacity onPress={() => onPressLastYear()}>
            <Icons color="grey" name="chevron-double-left" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressLastMonth()}>
            <Icons color="grey" name="chevron-left" size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.dateTitleTextContainer}>
          <Text style={styles.dateTitleText}>{toLocaleDateHeader(selectedDate, language)}</Text>
        </View>

        <View style={styles.twoArrowContainer}>
          <TouchableOpacity onPress={() => onPressNextMonth()}>
            <Icons color="grey" name="chevron-right" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressNextYear()}>
            <Icons color="grey" name="chevron-double-right" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.jumpTextContainer}>
        <TouchableOpacity onPress={() => jumpToToday()}>
          {showJumpToday && <Text style={styles.jumpText}>{translations.jumpName}</Text>}
        </TouchableOpacity>
      </View>
      <View style={styles.weekDaysContainer}>
        <WeekDays />
      </View>
    </View>
  )
}

const makeStyles = (colors: any) =>
  StyleSheet.create({
    wholeHeaderContainer: {
      flex: 1,
      width: '100%',
      position: 'absolute',
      top: 10,
      height: 80,
      alignSelf: 'center',
    },
    upperHeaderContainer: {
      paddingRight: 10,
      paddingLeft: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    twoArrowContainer: {
      flexDirection: 'row',
    },
    dateTitleTextContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    dateTitleText: {
      fontSize: 22,
      color: colors.text,
    },
    jumpTextContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 20,
      marginTop: 10,
    },
    jumpText: {
      color: 'grey',
      fontSize: 17,
    },
    weekDaysContainer: {
      width: '100%',
      paddingTop: 20,
    },
  })
export { CalendarHeader }
