import React, { useState } from 'react'
import { Dimensions, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { EditProfileButton } from '../components/EditProfileButton'
import { useTheme } from 'react-native-paper'
import { periodStore } from '../store'
import { AdditionalColors } from '../styles/globalColors'

void Icons.loadFont()
void Fontisto.loadFont()

const ProfileScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
    periodStore.isDarkMode ? periodStore.lightMode() : periodStore.darkMode()
  }

  // const [name, setName] = useState('ANNA')
  const { colors } = useTheme()
  const styles = makeStyles(colors)

  return (
    <View style={styles.container}>
      <View style={[styles.generalStyle, styles.aboutMe]}>
        <Text style={styles.text}>About me</Text>
      </View>

      <View style={[styles.generalStyle, styles.nameRemainderTheme]}>
        <View style={styles.upperBlock}>
          <Icons name="face-woman" size={30} color="grey" />
          <Text style={styles.text}>ANNA</Text>
          <EditProfileButton />
        </View>

        <View style={styles.upperBlock}>
          <Icons name="theme-light-dark" size={30} color="grey" />
          <Text style={styles.text}>DARK</Text>
          <Switch
            trackColor={{ false: 'pink', true: 'black' }}
            thumbColor={'white'}
            ios_backgroundColor="pink"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View style={styles.upperBlock}>
          <Icons name="bell-ring-outline" size={30} color="grey" />
          <Text style={styles.text}>REMAINDERS</Text>
          <EditProfileButton />
        </View>
      </View>

      <View style={[styles.generalStyle, styles.periodCycleLength]}>
        <View style={styles.midBlock}>
          <Icons name="chart-donut" size={30} color={AdditionalColors.azure} />
          <Text style={styles.text}>CYCLE LENGTH</Text>
          <EditProfileButton />
        </View>
        <View style={styles.midBlock}>
          <Fontisto name="blood-drop" size={30} color="red" />
          <Text style={styles.text}>PERIOD LENGTH</Text>
          <EditProfileButton />
        </View>
      </View>

      <View style={[styles.generalStyle, styles.feedback]}>
        <TouchableOpacity onPress={() => null}>
          <View style={[styles.upperBlock, styles.widthFeedback]}>
            <Icons name="telegram" size={30} color={AdditionalColors.azure} />
            <Text style={styles.text}>FEEDBACK</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    aboutMe: {
      flex: 1,
      marginTop: 40,
    },
    nameRemainderTheme: {
      flex: 3,
      // borderColor: 'red',
      // borderWidth: 1,
    },
    periodCycleLength: {
      flex: 3,
      // borderColor: 'black',
      // borderWidth: 1,
    },
    feedback: {
      flex: 1,
      // borderColor: 'black',
      // borderWidth: 1,
      justifyContent: 'flex-end',
    },
    upperBlock: {
      flexDirection: 'row',
      borderColor: 'black',
      width: Dimensions.get('window').width * 0.6,
      borderWidth: 3,
      justifyContent: 'space-between',
      marginTop: 10,
    },
    text: {
      alignSelf: 'center',
      color: colors.text,
    },
    widthFeedback: {
      width: 150,
    },
    generalStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      width: Dimensions.get('window').width * 0.95,
    },
    midBlock: {
      flexDirection: 'row',
      borderColor: 'black',
      width: Dimensions.get('window').width * 0.6,
      borderWidth: 3,
      justifyContent: 'space-between',
      marginTop: 10,
    },
  })

export { ProfileScreen }
