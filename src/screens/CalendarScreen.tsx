import {format} from 'date-fns'
import {observer} from 'mobx-react-lite'
import React, {useContext, useState} from 'react'
import {Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Calendar} from 'react-native-calendars'
import {DateData} from 'react-native-calendars/src/types'
import {useTheme} from 'react-native-paper'

import {CalendarHeader} from '../components/CalendarHeader'
import {ModalConfirmDay} from '../components/ModalConfirmDay'
import {ModalEditDay} from '../components/ModalEditDay'
import {DatePatter, Error} from '../constants'
import {checkDateAlreadySelected} from '../functions/checkDateAlreadySelected'
import {makeDaysMarked} from '../functions/makeDaysMarked'
import {LocalizationContext} from '../locale/LocalizationContext'
import {useStore} from '../store/rootStore'

const CalendarScreen = observer(({}) => {
    const store = useStore()
    const predictedPeriods = store.predictedPeriods
    const periods = store.historyPeriods
    const isDarkMode = store.isDarkMode


    const [modalEditDayVisible, setModalEditDayVisible] = useState<boolean>(false)
    const [modalConfirmDayVisible, setModalConfirmDayVisible] = useState<boolean>(false)
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const [pressedDay, setPressedDay] = useState<string>('')

    const {translations} = useContext(LocalizationContext)

    const {colors} = useTheme()
    const styles = makeStyles(colors)

    const dateFormatter = (selectedDate: Date) => {
        return format(selectedDate, DatePatter.YEAR_MONTH)
    }

    const CalendarHeaderHandler = () => {
        return CalendarHeader({selectedDate, setSelectedDate})
    }

    const keyRender = (selectedDate: Date, isDarkMode: boolean, periods: string[][]) => {
        const date = dateFormatter(selectedDate)
        const periodLength = Object.keys(periods).length
        return `${date}-${isDarkMode}-${periodLength}`
    }

    const handleDayPress = async (day: DateData) => {
        const isDateAvailable = await checkDateAlreadySelected(day.dateString, periods)
        if (isDateAvailable) {
            setPressedDay(day.dateString)
            setModalConfirmDayVisible(true)
        } else {
            setPressedDay(Error.SELECTED_DAY)
            setModalEditDayVisible(true)
        }
    }

    const allPeriods: string[][] = [...periods, ...predictedPeriods]

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.calendarContainer}>
                <Calendar
                    current={dateFormatter(selectedDate)}
                    customHeader={CalendarHeaderHandler}
                    firstDay={1}
                    key={keyRender(selectedDate, isDarkMode, periods)}
                    markedDates={makeDaysMarked(allPeriods)}
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
                    <Text style={styles.infoText}>{translations.ovulationInfo}</Text>
                </View>
            </View>
            <ModalEditDay modalEditDayVisible={modalEditDayVisible} setModalEditDayVisible={setModalEditDayVisible}
                          pressedDay={pressedDay}/>
            <ModalConfirmDay modalConfirmDayVisible={modalConfirmDayVisible}
                             setModalConfirmDayVisible={setModalConfirmDayVisible} pressedDay={pressedDay}/>
        </SafeAreaView>
    )
})

const makeStyles = (colors: ReactNativePaper.ThemeColors) =>
    StyleSheet.create({
        screenContainer: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: colors.background,
        },
        calendarContainer: {
            flex: 4,
            justifyContent: 'flex-end',
            color: colors.calendar,
        },
        calendar: {
            backgroundColor: colors.calendar,
            flex: 1,
            paddingTop: 100,
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
    })

export {CalendarScreen}
