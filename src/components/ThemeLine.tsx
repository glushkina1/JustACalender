import React from "react"
import {Switch, Text, View} from "react-native"
import Fontisto from "react-native-vector-icons/Fontisto"
import Ionicons from "react-native-vector-icons/Ionicons"
import { iconSize } from "../constants"
import {translations} from "../locale/translations"
import {AdditionalColors} from "../styles/globalColors"
import { makeGlobalStyles } from "../styles/globalStyles"


void Ionicons.loadFont()
void Fontisto.loadFont()

interface IThemeLine {
    isDarkMode: boolean
    toggleDarkMode: () => void
    colors: ReactNativePaper.ThemeColors
}
const ThemeLine = ({isDarkMode, colors, toggleDarkMode}: IThemeLine) => {
    const globalStyles = makeGlobalStyles(colors)

    return (
        <View style={globalStyles.row}>
            <View style={globalStyles.iconPosition}>
                {isDarkMode ? (
                    <Ionicons color={AdditionalColors.darkBlue} name="moon" size={33}/>
                ) : (
                    <Fontisto color="yellow" name="day-sunny" size={iconSize}/>
                )}
            </View>
            <View style={globalStyles.mainTextPosition}>
                {isDarkMode ? (
                    <Text style={globalStyles.text}>{translations.darkMode}</Text>
                ) : (
                    <Text style={globalStyles.text}>{translations.lightMode}</Text>
                )}
            </View>
            <View style={globalStyles.editButtonPosition}>
                <Switch
                    ios_backgroundColor="pink"
                    thumbColor="white"
                    trackColor={{false: 'pink', true: 'grey'}}
                    value={isDarkMode}
                    onValueChange={toggleDarkMode}
                />
            </View>
        </View>
    )
}

export {ThemeLine}