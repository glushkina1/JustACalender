import {format} from 'date-fns'
import {observer} from 'mobx-react-lite'
import React, {useCallback, useContext, useState} from 'react'
import {Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Calendar} from 'react-native-calendars'
import {DateData} from 'react-native-calendars/src/types'
import {useTheme} from 'react-native-paper'

import {CalendarHeader} from '../components/CalendarHeader'
import {ModalConfirmDay} from '../components/ModalConfirmDay'
import {DatePatter} from '../constants'
import {markedDates} from '../functions/fillMarkedDays'
import {LocalizationContext} from '../locale/LocalizationContext'
import {useStore} from '../store/rootStore'

const CalendarScreen = observer(({}) => {
    const store = useStore()
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const [showJumpToday, setShowJumpToday] = useState<boolean>(false)
    const [pressedDay, setPressedDay] = useState<string>('')
    const {translations} = useContext(LocalizationContext)


    const {colors} = useTheme()
    const styles = makeStyles(colors)


    const dateFormatter = useCallback((selectedDate: Date) => {
        return format(selectedDate, DatePatter.YEAR_MONTH)
    },[selectedDate])

    const CalendarHeaderHandler = () => {
        return CalendarHeader({selectedDate, setSelectedDate, showJumpToday, setShowJumpToday})
    }

    const keyRender = (selectedDate: Date,isDarkMode: boolean) => {
        const date = dateFormatter(selectedDate)
        return `${date}-${isDarkMode}`
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
                    customHeader={CalendarHeaderHandler}
                    firstDay={1}
                    key={keyRender(selectedDate,store.isDarkMode)}
                    markedDates={markedDates()}
                    markingType="period"
                    style={styles.calendar}
                    theme={{
                        todayTextColor: colors.todayColor,
                        dayTextColor: colors.dayColor,
                        textDayFontSize: 16,
                        textDisabledColor: 'grey',
                        calendarBackground: colors.calendar
                    }}
                    onDayPress={day => {
                        handleDayPress(day)
                    }}
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
                <ModalConfirmDay modalVisible={modalVisible} pressedDay={pressedDay} setModalVisible={setModalVisible}/>
            </View>
        </SafeAreaView>
    )
})

const makeStyles = (colors: ReactNativePaper.ThemeColors) =>
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

export {CalendarScreen}
