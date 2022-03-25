import React, { useContext } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'react-native-paper'

import { languageList } from '../constants'
import { LocalizationContext } from '../locale/LocalizationContext'

interface LanguageListProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  store: any
}

const LanguageList = ({ setModalVisible }: LanguageListProps) => {
  const { colors } = useTheme()
  const styles = makeStyles(colors)
  const { translations, setAppLanguage } = useContext(LocalizationContext)

  const handleLanguage = (lang: string) => {
    setAppLanguage(lang)
    closeModal()
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{translations.chooseLanguage}</Text>
      <FlatList
        data={Object.keys(languageList)}
        renderItem={({ item }) => (
          <TouchableOpacity key={item} onPress={() => handleLanguage(item)}>
            <View>
              <Text style={{ color: colors.text }}>{languageList[item]}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => closeModal()}>
        <Text style={styles.text}>{translations.cancel}</Text>
      </TouchableOpacity>
    </View>
  )
}

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: 30,
      justifyContent: 'space-around',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'red',
    },
    languageList: {
      width: Dimensions.get('window').width * 0.7,
      borderWidth: 1,
      borderColor: 'green',
    },
    text: {
      color: colors.text,
      textAlign: 'center',
      fontSize: 16,
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      backgroundColor: colors.greyBlack,
      width: Dimensions.get('window').width * 0.4,
      // borderColor: 'blue',
      // borderWidth: 1,
      justifyContent: 'center',
    },
  })
export { LanguageList }
