import {observer} from 'mobx-react-lite'
import React from 'react'
import {Dimensions, StyleSheet, Text, View} from 'react-native'
import {useTheme} from 'react-native-paper'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {useStore} from '../store/rootStore'
import {makeGlobalStyles} from '../styles/globalStyles'
import { UserNameLine } from '../components/UserNameLine'
import { PeriodLengthLine } from '../components/PeriodLengthLine'
import { CycleLengthLine } from '../components/CyclePeriodLine'
import { translations } from '../locale/translations'
import { FeedbackContent } from '../components/FeedbackContent'
import { RemainderLine } from '../components/RemindersLine'
import { LanguageLine } from '../components/LanguageLine'
import { ThemeLine } from '../components/ThemeLine'

void MaterialCommunityIcons.loadFont()
void Fontisto.loadFont()
void Ionicons.loadFont()

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

            <View style={[globalStyles.generalStyle, globalStyles.block]}>
                <UserNameLine colors={colors} userName={store.userName}/>
                <PeriodLengthLine colors={colors} periodLength={store.periodLength}/>
                <CycleLengthLine colors={colors} cycleLength={store.cycleLength}/>
            </View>

            <View style={[globalStyles.generalStyle, styles.settingsTitle]}>
                <Text style={[globalStyles.text, styles.title]}>{translations.settings}</Text>
            </View>

            <View style={[globalStyles.generalStyle, globalStyles.block]}>
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
        zIndex: {
            zIndex: 1,
        },
        settingsTitle: {
            flex: 1,
        },
        dropDownPicker: {
            flex: 2,
            alignSelf: 'flex-start',
        },
        aboutMe: {
            flex: 1,
            marginTop: 40,
        },
        title: {
            letterSpacing: 0.3,
            fontFamily: 'YanoneKaffeesatz-Regular',
        },
        generalStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.get('window').width * 0.95,
        },
        block: {
            flex: 4,
            justifyContent: 'flex-start',
        },

    })

export {SettingsScreen}
