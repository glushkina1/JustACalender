import {observer} from 'mobx-react-lite'
import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import {useTheme} from 'react-native-paper'
import {CycleLengthLine} from '../components/settings/CyclePeriodLine'
import {FeedbackContent} from '../components/settings/FeedbackContent'
import {LanguageLine} from '../components/settings/LanguageLine'
import {PeriodLengthLine} from '../components/settings/PeriodLengthLine'
import {RemainderLine} from '../components/settings/RemindersLine'
import {ThemeLine} from '../components/settings/ThemeLine'
import {UserNameLine} from '../components/settings/UserNameLine'
import {translations} from '../locale/translations'
import {useStore} from '../store/rootStore'
import {makeGlobalStyles} from '../styles/globalStyles'


const SettingsScreen = observer(({}) => {
    const store = useStore()
    const {colors} = useTheme()
    const styles = makeStyles(colors)
    const globalStyles = makeGlobalStyles(colors)

    const toggleDarkMode = () => {
        store.toggleDarkMode()
    }

    return (
        <View style={styles.container}>
            <View style={[globalStyles.generalStyle, styles.aboutMe]}>
                <Text style={[globalStyles.text, styles.title]}>{translations.aboutMe}</Text>
            </View>

            <View style={[globalStyles.generalStyle, styles.block]}>
                <UserNameLine colors={colors} userName={store.userName}/>
                <PeriodLengthLine colors={colors} periodLength={store.periodLength}/>
                <CycleLengthLine colors={colors} cycleLength={store.cycleLength}/>
            </View>

            <View style={[globalStyles.generalStyle, styles.settingsTitle]}>
                <Text style={[globalStyles.text, styles.title]}>{translations.settings}</Text>
            </View>

            <View style={[globalStyles.generalStyle, styles.block]}>
                <RemainderLine colors={colors}/>
                <LanguageLine colors={colors} language={store.language}/>
                <ThemeLine colors={colors} isDarkMode={store.isDarkMode} toggleDarkMode={toggleDarkMode}/>
            </View>

            <FeedbackContent colors={colors}/>
        </View>
    )
})

const makeStyles = (colors: ReactNativePaper.ThemeColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: colors.background,
        },
        settingsTitle: {
            flex: 1,
        },
        aboutMe: {
            flex: 1,
            marginTop: 40,
        },
        title: {
            letterSpacing: 0.3,
            fontFamily: 'YanoneKaffeesatz-Regular',
        },
        block: {
            flex: 4,
            justifyContent: 'flex-start',
        },
    })

export {SettingsScreen}
