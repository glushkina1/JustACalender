import { StyleSheet } from "react-native";
const { colors } = useTheme()
const styles = makeStyles(colors)
const makeStyles = (colors: any) =>
    StyleSheet.create({
        container: {
            // flex: 3,
            alignItems: 'center',
            borderWidth: 4,
            borderColor: 'red',
        },
        text: {
            color: colors.text,
            textAlign: 'center',
            fontSize: 16,
        },
    })