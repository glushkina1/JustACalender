import React, {useContext, useState} from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { CalendarHeader } from '../components/CalendarHeader'
import { DatePatter } from '../constants'
import { format } from 'date-fns'
import { DateData } from 'react-native-calendars/src/types'
import { ModalConfirmDay } from '../components/ModalConfirmDay'
import { markedDates } from '../functions/fillMarkedDays'
import { useTheme } from 'react-native-paper'
import { observer } from 'mobx-react-lite'
import { useStore } from '../store/rootStore'
import {LocalizationContext} from "../locale/LocalizationContext";

const CalendarScreen = observer(({}) => {
  const store = useStore()
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [showJumpToday, setShowJumpToday] = useState<boolean>(false)
  const [pressedDay, setPressedDay] = useState<string>('')
  const {translations} = useContext(LocalizationContext);

  const { colors } = useTheme()
  const styles = makeStyles(colors)

  let dateFormatter = (selectedDate: Date) => {
    return format(selectedDate, DatePatter.YEAR_MONTH)
  }

  const CalendarHeaderHandler = () => {
    return CalendarHeader({ selectedDate, setSelectedDate, showJumpToday, setShowJumpToday })
  }

  const handleDayPress = (day: DateData) => {
    setModalVisible(true)
    setPressedDay(day.dateString)
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.calendarContainer}>
        <Calendar
          current={dateFormatter(selectedDate)}
          key={dateFormatter(selectedDate)}
          customHeader={CalendarHeaderHandler}
          style={styles.calendar}
          firstDay={1}
          onDayPress={day => {
            handleDayPress(day)
          }}
          theme={{
            todayTextColor: 'black',
            dayTextColor: 'white',
            textDisabledColor: 'grey',
            calendarBackground: colors.calendar,
          }}
          markingType={'period'}
          markedDates={markedDates()}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoTextContainer}>
          <TouchableOpacity onPress={() => store.resetEverything()}>
            <Text style={styles.infoText}>{translations.resetEverything}</Text>
          </TouchableOpacity>
          <Text style={styles.infoText}>{translations.info}</Text>
        </View>
      </View>
      <View>
        <ModalConfirmDay modalVisible={modalVisible} setModalVisible={setModalVisible} pressedDay={pressedDay} />
      </View>
    </SafeAreaView>
  )
})

const makeStyles = (colors: any) =>
  StyleSheet.create({
    screenContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    calendarContainer: {
      flex: 4,
      justifyContent: 'flex-end',
      height: 350,
      color: colors.calendar,
    },
    calendar: {
      backgroundColor: colors.calendar,
      flex: 1,
      paddingTop: 90,
      height: 300,
      justifyContent: 'center',
      borderRadius: 30,
      marginBottom: 50,
      marginTop: 50,
      width: Dimensions.get('window').width * 0.95,
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      width: Dimensions.get('window').width * 0.95,
    },
    infoText: {
      alignItems: 'center',
      padding: 20,
      fontFamily: 'YanoneKaffeesatz-Light',
      fontSize: 20,
      color: colors.text,
    },
    infoTextContainer: {
      backgroundColor: colors.calendar,
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
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  })

export { CalendarScreen }
