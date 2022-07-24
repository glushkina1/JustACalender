import React from "react"
import {Text, View} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { iconSize } from "../../constants"
import {translations} from "../../locale/translations"
import {AdditionalColors} from "../../styles/globalColors"
import {makeGlobalStyles} from "../../styles/globalStyles"
import {EditSettingButton} from "../EditSettingButton"

void MaterialCommunityIcons.loadFont()

interface IRemainderLine {
    colors: ReactNativePaper.ThemeColors
}

const RemainderLine = ({colors}: IRemainderLine) => {
    const globalStyles = makeGlobalStyles(colors)

    return (
        <View style={globalStyles.row}>
            <View style={globalStyles.iconPosition}>
                <MaterialCommunityIcons color={AdditionalColors.grey} name="bell-ring-outline" size={iconSize}/>
            </View>
            <View style={globalStyles.mainTextPosition}>
                <Text style={globalStyles.text}>{translations.remainders}</Text>
            </View>
            <View style={globalStyles.editButtonPosition}>
                <EditSettingButton typeContent="remainder"/>
            </View>
        </View>
    )
}

export {RemainderLine}