import React from "react"
import {Text, View} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { makeGlobalStyles } from "../../styles/globalStyles"
import {EditSettingButton} from "../EditSettingButton"

void MaterialCommunityIcons.loadFont()

interface IUser {
    userName: string
    colors: ReactNativePaper.ThemeColors
}

const UserNameLine = ({colors, userName}: IUser) => {
    const globalStyles = makeGlobalStyles(colors)
    return (
        <View style={globalStyles.row}>
            <View style={globalStyles.iconPosition}>
                <MaterialCommunityIcons color={colors.greyBlack} name="face-woman" size={33}/>
            </View>
            <View style={globalStyles.mainTextPosition}>
                <Text style={globalStyles.text}>{userName}</Text>
            </View>
            <View style={globalStyles.editButtonPosition}>
                <EditSettingButton typeContent="userName"/>
            </View>
        </View>
    )
}

export {UserNameLine}

