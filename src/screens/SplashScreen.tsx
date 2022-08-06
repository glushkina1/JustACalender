import Lottie from 'lottie-react-native'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from 'react-native-paper'

const SplashScreen = observer(({}) => {
  const { colors } = useTheme()
  const styles = makeStyles(colors)

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>Just a Calendar</Text>
      </View>
      <View style={styles.lottieIcon}>
        <Lottie autoPlay loop source={require('../../assets/splash.json')} />
      </View>
      <View style={styles.loadingContainer}>
        <Text style={styles.textLoading}>Loading...</Text>
      </View>
    </View>
  )
})

const makeStyles = (colors: ReactNativePaper.ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: colors.background,
    },
    titleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    loadingContainer: {
      flex: 1,
      paddingTop: 20,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    textTitle: {
      fontFamily: 'AmaticSC-Regular',
      fontSize: 45,
    },
    textLoading: {
      fontFamily: 'AmaticSC-Regular',
      fontSize: 30,
    },
    lottieIcon: {
      flex: 2,
    },
  })

export default SplashScreen
