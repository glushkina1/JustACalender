import React, { useContext, useState } from 'react'
import { Dimensions, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { EditProfileButton } from '../components/EditProfileButton'
import { useTheme } from 'react-native-paper'
import { AdditionalColors } from '../styles/globalColors'
import { observer } from 'mobx-react-lite'
import { useStore } from '../store/rootStore'
import { ModalLanguagePicker } from '../components/ModalLanguagePicker'
import { LocalizationContext } from '../locale/LocalizationContext'

void Icons.loadFont()
void Fontisto.loadFont()
void Ionicons.loadFont()

const SettingsScreen = observer(({}) => {
  const store = useStore()
  const { colors } = useTheme()
  const styles = makeStyles(colors)
  const { translations } = useContext(LocalizationContext)

  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const toggleSwitch = () => {
    store.toggleDarkMode()
  }

  const handleLanguagePicker = () => {
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <View style={[styles.generalStyle, styles.aboutMe]}>
        <Text style={[styles.text, styles.title]}>{translations.aboutMe}</Text>
      </View>

      <View style={[styles.generalStyle, styles.block]}>
        <View style={styles.row}>
          <View style={styles.iconPosition}>
            <Icons name="face-woman" size={33} color={colors.greyBlack} />
          </View>
          <View style={styles.mainTextPosition}>
            <Text style={styles.text}>ANNA</Text>
          </View>
          <View style={styles.editButtonPosition}>
            <EditProfileButton />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.iconPosition}>
            <Fontisto name="blood-drop" size={30} color={AdditionalColors.red} style={{ paddingLeft: 5 }} />
          </View>
          <View style={styles.mainTextPosition}>
            <Text style={styles.text}>{translations.periodLength + ' ' + store.periodLength}</Text>
          </View>
          <View style={styles.editButtonPosition}>
            <EditProfileButton />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.iconPosition}>
            <Icons name="chart-donut" size={33} color={AdditionalColors.lightBlue} />
          </View>
          <View style={styles.mainTextPosition}>
            <Text style={styles.text}>{translations.cycleLength + ' ' + store.cycleLength}</Text>
          </View>
          <View style={styles.editButtonPosition}>
            <EditProfileButton />
          </View>
        </View>
      </View>

      <View style={[styles.generalStyle, styles.settingsTitle]}>
        <Text style={[styles.text, styles.title]}>{translations.settings}</Text>
      </View>

      <View style={[styles.generalStyle, styles.block]}>
        <View style={styles.row}>
          <View style={styles.iconPosition}>
            <Icons name="bell-ring-outline" size={33} color={AdditionalColors.grey} />
          </View>
          <View style={styles.mainTextPosition}>
            <Text style={styles.text}>{translations.remainders}</Text>
          </View>
          <View style={styles.editButtonPosition}>
            <EditProfileButton />
          </View>
        </View>

        <View style={[styles.row, styles.zIndex]}>
          <View style={styles.iconPosition}>
            <Ionicons name="language" size={33} color={AdditionalColors.darkBlue} />
          </View>
          <View style={styles.mainTextPosition}>
            <Text style={styles.text}>{translations.language + ': ' + store.language}</Text>
          </View>
          <View style={styles.editButtonPosition}>
            <TouchableOpacity onPress={() => handleLanguagePicker()}>
              <Icons name="pencil" size={25} color="grey" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.iconPosition}>
            {store.isDarkMode ? (
              <Ionicons name="moon" size={33} color={AdditionalColors.darkBlue} />
            ) : (
              <Fontisto name="day-sunny" size={35} color="yellow" />
            )}
          </View>
          <View style={styles.mainTextPosition}>
            <Text style={styles.text}>{translations.darkMode}</Text>
          </View>
          <View style={styles.editButtonPosition}>
            <Switch
              trackColor={{ false: 'pink', true: 'grey' }}
              thumbColor={'white'}
              ios_backgroundColor="pink"
              onValueChange={toggleSwitch}
              value={store.isDarkMode}
            />
          </View>
        </View>
      </View>

      <View style={[styles.generalStyle, styles.feedback]}>
        <TouchableOpacity onPress={() => null}>
          <View style={[styles.row, styles.widthFeedback]}>
            <Text style={styles.text}>{translations.giveFeedback}</Text>
            <Icons name="telegram" size={35} color={AdditionalColors.azure} style={styles.telegramIcon} />
          </View>
        </TouchableOpacity>
      </View>
      <ModalLanguagePicker modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  )
})

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    aboutMe: {
      flex: 1,
      marginTop: 40,
    },
    block: {
      flex: 4,
      justifyContent: 'flex-start',
    },
    feedback: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      height: 45,
      width: Dimensions.get('window').width * 0.77,
      borderBottomWidth: 1,
      borderColor: colors.greyBlack,
      marginVertical: 10,
      alignItems: 'baseline',
      zIndex: 0.1,
    },
    zIndex: {
      zIndex: 1,
    },
    text: {
      color: colors.text,
      fontSize: 25,
      alignSelf: 'center',
      fontFamily: 'YanoneKaffeesatz-Light',
    },
    widthFeedback: {
      justifyContent: 'space-between',
      borderBottomWidth: 0,
      width: Dimensions.get('window').width * 0.65,
    },
    generalStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      width: Dimensions.get('window').width * 0.95,
    },
    settingsTitle: {
      flex: 1,
    },
    title: {
      letterSpacing: 0.3,
      fontFamily: 'YanoneKaffeesatz-Regular',
    },
    iconPosition: {
      flex: 1,
      justifyContent: 'flex-start',
    },
    mainTextPosition: {
      flex: 5,
      justifyContent: 'center',
    },
    editButtonPosition: {
      flex: 1,
      alignItems: 'center',
    },
    dropDownPicker: {
      flex: 2,
      alignSelf: 'flex-start',
      // borderColor: 'red',
      // borderWidth: 1,
    },
    telegramIcon: {
      height: 40,
    },
  })

export { SettingsScreen }
