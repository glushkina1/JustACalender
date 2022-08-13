import {differenceInDays, format} from 'date-fns'
import {observer} from 'mobx-react-lite'
import React, {useContext} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useTheme} from 'react-native-paper'
import {DatePatter} from '../constants'

import {toLocaleDateToday} from '../functions/toLocaleDate'
import {LocalizationContext} from '../locale/LocalizationContext'
import {useStore} from '../store/rootStore'
import {makeGlobalStyles} from '../styles/globalStyles'
import {NavigationScreenProp, NavigationParams} from "react-navigation";
import {NavigationState} from '@react-navigation/native'
import { addNewPeriod } from '../functions/addNewPeriod'


export interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const TodayScreen = observer(({navigation}: IProps) => {
    const store = useStore()
    const currentLanguage = store.language
    const {colors} = useTheme()
    const styles = makeStyles(colors)
    const globalStyles = makeGlobalStyles(colors)

    const now = new Date()
    const nowFormatted = format(now, DatePatter.YEAR_MONTH_DAY)
    const todayDate = toLocaleDateToday(now, currentLanguage)
    const {translations} = useContext(LocalizationContext)


    const periodStarts = () => {
        addNewPeriod(nowFormatted, store)
        navigation.navigate('Calendar')
    }

    const nextOvulationStart = () => {
        if (store.nextOvulationStart) {
            const daysLeft = differenceInDays(
                new Date(store.nextOvulationStart),
                new Date(nowFormatted)
            )
            return `${daysLeft}`
        }
        return translations.errorDaysLeft

    }
    const nextPeriodStart = () => {
        if (store.nextPeriodStart) {
            const daysLeft = differenceInDays(
                new Date(store.nextPeriodStart),
                new Date(nowFormatted)
            )
            return `${daysLeft}`
        }
        return translations.errorDaysLeft
    }

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
                    <Text style={[globalStyles.text,styles.periodText]}>{translations.period}</Text>
                </View>
                <View style={styles.periodDaysLeftContainer}>
                    <Text style={[globalStyles.text,styles.daysLeftText]}>{nextPeriodStart()} {translations.daysLeft}</Text>
                </View>
                </View>
                <Text style={[globalStyles.text, styles.ovulationText]}>{translations.ovulation} {nextOvulationStart()} {translations.daysLeft}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => periodStarts()}
                >
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
            width:'100%',
            justifyContent: 'center',
            flex: 2,
        },
        periodContainer: {
            padding: 20,
            borderColor:'red',
            borderWidth:1,
            marginBottom:30,
        },
        periodTextContainer: {
            paddingLeft:50,
            alignItems:'flex-start',
        },
        periodDaysLeftContainer: {
            paddingRight:50,
            alignItems:'flex-end',
        },
        button: {
            alignItems: "center",
            backgroundColor: "#cb5f5f",
            borderRadius: 10,
            padding: 27,
            elevation: 2,
        },
        daysLeftText: {
            fontSize:45,
            fontFamily: 'YanoneKaffeesatz-Bold',
            letterSpacing:1.5,
        },
        ovulationText: {
            fontSize: 33,
            letterSpacing:2,
        },
        periodText: {
            fontFamily: 'YanoneKaffeesatz-Light',
            fontSize: 40,
        },
        todayText:  {
            fontSize: 33,
            letterSpacing:2,
        }

    })

export {TodayScreen}
