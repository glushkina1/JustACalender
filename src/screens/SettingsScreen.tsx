import {observer} from 'mobx-react-lite'
import React, {useContext} from 'react'
import {Dimensions, StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native'
import {useTheme} from 'react-native-paper'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'


import {EditSettingButton} from '../components/EditSettingButton'
import {LocalizationContext} from '../locale/LocalizationContext'
import {useStore} from '../store/rootStore'
import {AdditionalColors} from '../styles/globalColors'
import { makeGlobalStyles } from '../styles/globalStyles'

void MaterialCommunityIcons.loadFont()
void Fontisto.loadFont()
void Ionicons.loadFont()
void EvilIcons.loadFont()

const SettingsScreen = observer(({}) => {
    const store = useStore()
    const {colors} = useTheme()
    const styles = makeStyles(colors)
    const globalStyles = makeGlobalStyles(colors)
    const {translations} = useContext(LocalizationContext)

    const toggleSwitch = () => {
        store.toggleDarkMode()
    }

    return (
        <View style={styles.container}>
            <View style={[styles.generalStyle, styles.aboutMe]}>
                <Text style={[globalStyles.text, styles.title]}>{translations.aboutMe}</Text>
            </View>

            <View style={[styles.generalStyle, styles.block]}>
                <View style={styles.row}>
                    <View style={styles.iconPosition}>
                        <MaterialCommunityIcons color={colors.greyBlack} name="face-woman" size={33}/>
                    </View>
                    <View style={styles.mainTextPosition}>
                        <Text style={globalStyles.text}>{store.userName}</Text>
                    </View>
                    <View style={styles.editButtonPosition}>
                        <EditSettingButton typeContent="userName"/>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.iconPosition}>
                        <Fontisto color={AdditionalColors.red} name="blood-drop" size={30} style={{paddingLeft: 5}}/>
                    </View>
                    <View style={styles.mainTextPosition}>
                        <Text style={globalStyles.text}>{translations.periodLength + ' ' + store.periodLength}</Text>
                    </View>
                    <View style={styles.editButtonPosition}>
                        <EditSettingButton typeContent='periodLength'/>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.iconPosition}>
                        <MaterialCommunityIcons color={AdditionalColors.lightBlue} name="chart-donut" size={33}/>
                    </View>
                    <View style={styles.mainTextPosition}>
                        <Text style={globalStyles.text}>{translations.cycleLength + ' ' + store.cycleLength}</Text>
                    </View>
                    <View style={styles.editButtonPosition}>
                        <EditSettingButton typeContent="cycleLength"/>
                    </View>
                </View>
            </View>

            <View style={[styles.generalStyle, styles.settingsTitle]}>
                <Text style={[globalStyles.text, styles.title]}>{translations.settings}</Text>
            </View>

            <View style={[styles.generalStyle, styles.block]}>
                <View style={styles.row}>
                    <View style={styles.iconPosition}>
                        <MaterialCommunityIcons color={AdditionalColors.grey} name="bell-ring-outline" size={33}/>
                    </View>
                    <View style={styles.mainTextPosition}>
                        <Text style={globalStyles.text}>{translations.remainders}</Text>
                    </View>
                    <View style={styles.editButtonPosition}>
                        {/*<EditSettingButton />*/}
                    </View>
                </View>

                <View style={[styles.row, styles.zIndex]}>
                    <View style={styles.iconPosition}>
                        <Ionicons color={AdditionalColors.darkBlue} name="language" size={33}/>
                    </View>
                    <View style={styles.mainTextPosition}>
                        <Text style={globalStyles.text}>{translations.language + ': ' + store.language}</Text>
                    </View>
                    <EditSettingButton content={store.language} typeContent="language"/>
                </View>

                <View style={styles.row}>
                    <View style={styles.iconPosition}>
                        {store.isDarkMode ? (
                            <Ionicons color={AdditionalColors.darkBlue} name="moon" size={33}/>
                        ) : (
                            <Fontisto color="yellow" name="day-sunny" size={35}/>
                        )}
                    </View>
                    <View style={styles.mainTextPosition}>
                        <Text style={globalStyles.text}>{translations.darkMode}</Text>
                    </View>
                    <View style={styles.editButtonPosition}>
                        <Switch
                            ios_backgroundColor="pink"
                            thumbColor="white"
                            trackColor={{false: 'pink', true: 'grey'}}
                            value={store.isDarkMode}
                            onValueChange={toggleSwitch}
                        />
                    </View>
                </View>
            </View>

            <View style={[styles.generalStyle, styles.feedback]}>
                <TouchableOpacity onPress={() => null}>
                    <View style={[styles.row, styles.widthFeedback]}>
                        <Text style={globalStyles.text}>{translations.giveFeedback}</Text>
                        <EvilIcons color={AdditionalColors.azure} name="sc-telegram" size={35}
                                   style={styles.telegramIcon}/>
                    </View>
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
            backgroundColor: colors.background,
        },
        aboutMe: {
            flex: 1,
            marginTop: 40,
        },
        block: {
            flex: 4,
            justifyContent: 'flex-start',
        },
        feedback: {
            flex: 1,
        },
        row: {
            flexDirection: 'row',
            height: 45,
            width: Dimensions.get('window').width * 0.77,
            borderBottomWidth: 1,
            borderColor: colors.greyBlack,
            marginVertical: 10,
            alignItems: 'baseline',
            zIndex: 0.1,
        },
        zIndex: {
            zIndex: 1,
        },
        widthFeedback: {
            justifyContent: 'space-between',
            borderBottomWidth: 0,
            width: Dimensions.get('window').width * 0.65,
        },
        generalStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.get('window').width * 0.95,
        },
        settingsTitle: {
            flex: 1,
        },
        title: {
            letterSpacing: 0.3,
            fontFamily: 'YanoneKaffeesatz-Regular',
        },
        iconPosition: {
            flex: 1,
            justifyContent: 'flex-start',
        },
        mainTextPosition: {
            flex: 5,
            justifyContent: 'center',
        },
        editButtonPosition: {
            flex: 1,
            alignItems: 'center',
        },
        dropDownPicker: {
            flex: 2,
            alignSelf: 'flex-start',
        },
        telegramIcon: {
            height: 40,
        },
    })

export {SettingsScreen}
