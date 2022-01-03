import React, { useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { CalendarHeader } from '../CalendarHeader'
import { format } from 'date-fns'
import { lightTheme } from '../colors'

const CalendarScreen = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [showJumpToday, setShowJumpToday] = useState<boolean>(false)


  let dateFormatter = (currentDate: Date) => {
    return format(currentDate, 'yyyy-MM')
  }

  const CalendarHeaderHandler = () => {
    return CalendarHeader({ currentDate, setCurrentDate, showJumpToday, setShowJumpToday })
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={[styles.calendarContainer, styles.itemContainer]}>
        <Calendar
          current={dateFormatter(currentDate)}
          key={dateFormatter(currentDate)}
          customHeader={CalendarHeaderHandler}
          style={styles.calendar}
          firstDay={1}
        />
      </View>
      <View style={[styles.itemContainer, styles.infoContainer]}>
        <View style={styles.infoTextView}>
          <Text style={styles.infoText}>INFO</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lightTheme.background,
  },
  calendarContainer: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  calendar: {
    paddingTop:125,
    width: '100%',
    height: '88%',
    borderRadius: 30,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  itemContainer: {
    width: Dimensions.get('window').width * 0.95,
    height: Dimensions.get('window').height * 0.45,
  },
  infoText: {
    alignItems: 'center',
    padding: 20,
  },
  infoTextView: {
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 30,
  },
})

export { CalendarScreen }
