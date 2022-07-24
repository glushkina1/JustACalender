import React from "react"
import {Text, View} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { iconSize } from "../../constants"
import {translations} from "../../locale/translations"
import {AdditionalColors} from "../../styles/globalColors"
import { makeGlobalStyles } from "../../styles/globalStyles"
import {EditSettingButton} from "../EditSettingButton"


void MaterialCommunityIcons.loadFont()


interface ICycleLength {
    cycleLength: number
    colors: ReactNativePaper.ThemeColors
}
const CycleLengthLine = ({cycleLength, colors}: ICycleLength) => {
    const globalStyles = makeGlobalStyles(colors)

    return (
        <View style={globalStyles.row}>
            <View style={globalStyles.iconPosition}>
                <MaterialCommunityIcons color={AdditionalColors.lightBlue} name="chart-donut" size={iconSize}/>
            </View>
            <View style={globalStyles.mainTextPosition}>
                <Text style={globalStyles.text}>{translations.cycleLength + ' ' + cycleLength}</Text>
            </View>
            <View style={globalStyles.editButtonPosition}>
                <EditSettingButton typeContent="cycleLength"/>
            </View>
        </View>
    )
}


export {CycleLengthLine}