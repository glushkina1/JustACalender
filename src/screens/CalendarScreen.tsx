import React, { useState } from 'react'
import {Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { Calendar } from 'react-native-calendars'
import { CalendarHeader } from '../components/CalendarHeader'
import { format } from 'date-fns'
import { DateData } from 'react-native-calendars/src/types'
import { ModalConfirmDay } from '../components/ModalConfirmDay'
import { markedDates } from '../functions/fillMarkedDays'
import { useTheme } from 'react-native-paper'
import {periodStore} from "../store";
import {observer} from "mobx-react-lite";

const CalendarScreen = observer(({}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [showJumpToday, setShowJumpToday] = useState<boolean>(false)
  const [selectedDay, setSelectedDay] = useState<string>('')

  const { colors } = useTheme()
  const styles = makeStyles(colors)

  let dateFormatter = (currentDate: Date) => {
    return format(currentDate, 'yyyy-MM')
  }

  const CalendarHeaderHandler = () => {
    return CalendarHeader({ currentDate, setCurrentDate, showJumpToday, setShowJumpToday })
  }

  const handleDayPress = (day: DateData) => {
    setModalVisible(true)
    setSelectedDay(day.dateString)
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
          onDayPress={day => {
            handleDayPress(day)
          }}
          markingType={'period'}
          markedDates={markedDates()}
        />
      </View>
      <View style={[styles.itemContainer, styles.infoContainer]}>
        <View style={styles.infoTextView}>
          <TouchableOpacity onPress={() => periodStore.resetEverything()}><Text style={styles.infoText}>RESET</Text></TouchableOpacity>
          <Text style={styles.infoText}>INFO</Text>
        </View>
      </View>
      <View>
        <ModalConfirmDay modalVisible={modalVisible} setModalVisible={setModalVisible} selectedDay={selectedDay} />
      </View>
    </SafeAreaView>
  )
})

const makeStyles = (colors: any) => StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  calendarContainer: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  calendar: {
    paddingTop: 125,
    width: '100%',
    height: '88%',
    borderRadius: 30,
    marginBottom: 20,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export { CalendarScreen }
