import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import { translations } from '../../locale/translations'
import { AdditionalColors } from '../../styles/globalColors'
import { IColors } from '../../styles/globalInterfaces'
import { makeGlobalStyles } from '../../styles/globalStyles'

void EvilIcons.loadFont()

const FeedbackContent = (colors: IColors) => {
  const globalStyles = makeGlobalStyles(colors.colors)

  return (
    <View style={[globalStyles.generalStyle, styles.feedback]}>
      <TouchableOpacity onPress={() => null}>
        <View style={[globalStyles.row, styles.widthFeedback]}>
          <Text style={[globalStyles.text, styles.textSharingOpinion]}>{translations.giveFeedback}</Text>
          <EvilIcons color={AdditionalColors.azure} name="sc-telegram" size={45} style={styles.telegramIcon} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  feedback: {
    flex: 1,
  },
  widthFeedback: {
    justifyContent: 'space-evenly',
    borderBottomWidth: 0,
  },
  textSharingOpinion: {
    padding: 10,
  },
  telegramIcon: {
    height: 40,
    justifyContent: 'flex-end',
  },
})

export { FeedbackContent }
