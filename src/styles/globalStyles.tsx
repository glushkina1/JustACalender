import { Dimensions, StyleSheet } from 'react-native'

const makeGlobalStyles = (colors: ReactNativePaper.ThemeColors) =>
  StyleSheet.create({
    text: {
      color: colors.text,
      textAlign: 'center',
      fontSize: 27,
      fontFamily: 'YanoneKaffeesatz-Light',
    },
    generalStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      width: Dimensions.get('window').width * 0.95,
    },
    row: {
      flexDirection: 'row',
      height: 45,
      width: Dimensions.get('window').width * 0.77,
      borderBottomWidth: 1,
      borderColor: colors.greyBlack,
      marginVertical: 10,
      alignItems: 'baseline',
    },
    mainTextPosition: {
      flex: 5,
      justifyContent: 'center',
    },
    editButtonPosition: {
      alignItems: 'center',
    },
    iconPosition: {
      justifyContent: 'flex-start',
    },
  })

export { makeGlobalStyles }
