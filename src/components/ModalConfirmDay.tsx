import { observer } from 'mobx-react-lite'
import React from 'react'
import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'react-native-paper'

import { addNewPeriod } from '../functions/addNewPeriod'
import {Error} from '../constants'
import { useStore } from '../store/rootStore'

interface ModalProps {
  modalConfirmDayVisible: boolean
  setModalConfirmDayVisible: React.Dispatch<React.SetStateAction<boolean>>
  pressedDay: string
}
const ModalConfirmDay = observer(({ modalConfirmDayVisible, setModalConfirmDayVisible, pressedDay }: ModalProps) => {
  const store = useStore()
  const { colors } = useTheme()
  const styles = makeStyles(colors)

  const handlePeriodStarts = () => {
    if (pressedDay !== Error.SELECTED_DAY) {
      addNewPeriod(pressedDay, store)
    }
    setModalConfirmDayVisible(false)
  }
  const closeModal = () => {
    setModalConfirmDayVisible(!modalConfirmDayVisible)
  }

  return (
      <Modal transparent animationType="fade" visible={modalConfirmDayVisible} onRequestClose={() => closeModal()}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.button} onPress={() => handlePeriodStarts()}>
            <Text style={styles.textStyle}>Period starts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => closeModal()}>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
  )
})

const makeStyles = (colors: ReactNativePaper.ThemeColors) =>
  StyleSheet.create({
    modalView: {
      justifyContent: 'space-around',
      marginTop: Dimensions.get('window').height * 0.4,
      width: 250,
      height: 180,
      backgroundColor: colors.background,
      borderRadius: 20,
      padding: 40,
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      backgroundColor: 'white',
    },
    textStyle: {
      color: 'black',
      fontSize: 16,
      textAlign: 'center',
    },
  })

export { ModalConfirmDay }
