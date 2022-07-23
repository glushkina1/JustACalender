import {StyleSheet} from "react-native";


const makeGlobalStyles = (colors: ReactNativePaper.ThemeColors) =>
    StyleSheet.create({
        text: {
            color: colors.text,
            textAlign: 'center',
            fontSize: 27,
            fontFamily: 'YanoneKaffeesatz-Light',
        },
    });


export {makeGlobalStyles}