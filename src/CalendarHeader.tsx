import { addMonths, addYears, subMonths, subYears } from 'date-fns'
import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { WeekDays } from './WeekDays'

import { toLocaleDate } from './toLocaleDate'

void Icons.loadFont()

interface CalendarHeaderProps {
  currentDate: Date
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
  showJumpToday: boolean
  setShowJumpToday: React.Dispatch<React.SetStateAction<boolean>>
}

const CalendarHeader = ({
  currentDate,
  setCurrentDate,
  showJumpToday,
  setShowJumpToday,
}: CalendarHeaderProps): object => {
  // const dateTitle = useMemo(() => toLocaleDate(currentDate, 'en-us'), [currentDate])
  const now = new Date()

  const jumpToToday = () => {
    setCurrentDate(now)
  }

  useEffect(() => {
    const nowMonth = now.getMonth()
    const currentMonth = currentDate.getMonth()
    const nowYear = now.getFullYear()
    const currentYear = currentDate.getFullYear()

    if (nowMonth === currentMonth && nowYear === currentYear) {
      setShowJumpToday(false)
    } else {
      setShowJumpToday(true)
    }
  }, [currentDate])

  const changeDateHandler = (value: string) => {
    let updatedDate: Date

    switch (value) {
      case 'showNextMonth':
        updatedDate = addMonths(new Date(currentDate), 1)
        break
      case 'showLastMonth':
        updatedDate = subMonths(new Date(currentDate), 1)
        break
      case 'showNextYear':
        updatedDate = addYears(new Date(currentDate), 1)
        break
      case 'showLastYear':
        updatedDate = subYears(new Date(currentDate), 1)
        break
      default:
        throw new Error()
    }
    setCurrentDate(updatedDate)
  }

  return (
    <View style={styles.wholeHeaderContainer}>
      <View style={styles.upperHeaderContainer}>
        <View style={styles.twoArrowContainer}>
          <TouchableOpacity onPress={() => changeDateHandler('showLastYear')}>
            <Icons name="chevron-double-left" size={30} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeDateHandler('showLastMonth')}>
            <Icons name="chevron-left" size={30} color="grey" />
          </TouchableOpacity>
        </View>

        <View style={styles.dateTitleTextContainer}>
          <Text style={styles.dateTitleText}>{toLocaleDate(currentDate, 'en-us')}</Text>
        </View>

        <View style={styles.twoArrowContainer}>
          <TouchableOpacity onPress={() => changeDateHandler('showNextMonth')}>
            <Icons name="chevron-right" size={30} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeDateHandler('showNextYear')}>
            <Icons name="chevron-double-right" size={30} color="grey" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.jumpTextContainer}>
        <TouchableOpacity onPress={() => jumpToToday()}>
          {showJumpToday && <Text style={styles.jumpText}>Jump to today</Text>}
        </TouchableOpacity>
      </View>
      <View style={styles.weekDaysContainer}>
        <WeekDays />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wholeHeaderContainer: {
    position: 'absolute',
    top: 20,
    left: 10,
    right: 10,
  },
  upperHeaderContainer: {
    flexDirection: 'row',
    width: '100%',
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
    color: 'black',
  },
  jumpTextContainer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height: 30,
  },
  jumpText: {
    color: 'grey',
    fontSize: 14,
  },
  weekDaysContainer: {
    marginTop:10,
    height: 20,
  },
})
export { CalendarHeader }
