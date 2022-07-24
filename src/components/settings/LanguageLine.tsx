import React from "react"
import {Text, View} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { iconSize } from "../../constants"
import {translations} from "../../locale/translations"
import {AdditionalColors} from "../../styles/globalColors"
import { makeGlobalStyles } from "../../styles/globalStyles"
import {EditSettingButton} from "../EditSettingButton"


void Ionicons.loadFont()


interface ILanguage {
    language: string
    colors: ReactNativePaper.ThemeColors
}
const LanguageLine = ({language, colors}: ILanguage) => {
    const globalStyles = makeGlobalStyles(colors)

    return (
        <View style={globalStyles.row}>
            <View style={globalStyles.iconPosition}>
                <Ionicons color={AdditionalColors.darkBlue} name="language" size={iconSize}/>
            </View>
            <View style={globalStyles.mainTextPosition}>
                <Text style={globalStyles.text}>{translations.language + ': ' + language}</Text>
            </View>
            <View style={globalStyles.editButtonPosition}>
                <EditSettingButton content={language} typeContent="language"/>
            </View>
        </View>
    )
}


export {LanguageLine}