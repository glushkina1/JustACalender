import React from "react"
import {Text, View} from "react-native"
import Fontisto from "react-native-vector-icons/Fontisto"
import { iconSize } from "../constants"
import {translations} from "../locale/translations"
import {AdditionalColors} from "../styles/globalColors"
import {makeGlobalStyles} from "../styles/globalStyles"
import {EditSettingButton} from "./EditSettingButton"


void Fontisto.loadFont()

interface IPeriod {
    periodLength: number
    colors: ReactNativePaper.ThemeColors
}

const PeriodLengthLine = ({periodLength, colors}: IPeriod) => {
    const globalStyles = makeGlobalStyles(colors)

    return (
        <View style={globalStyles.row}>
            <View style={globalStyles.iconPosition}>
                <Fontisto color={AdditionalColors.red} name="blood-drop" size={iconSize} style={{paddingLeft: 5}}/>
            </View>
            <View style={globalStyles.mainTextPosition}>
                <Text style={globalStyles.text}>{translations.periodLength + ' ' + periodLength}</Text>
            </View>
            <View style={globalStyles.editButtonPosition}>
                <EditSettingButton typeContent='periodLength'/>
            </View>
        </View>
    )
}

export {PeriodLengthLine}