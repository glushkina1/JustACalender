import { observer } from 'mobx-react-lite'
import React from 'react'
import { Alert, Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'react-native-paper'

import { fillMarkedDays } from '../functions/fillMarkedDays'
import { useStore } from '../store/rootStore'

interface ModalConfirmDayProps {
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  pressedDay: string
}
const ModalConfirmDay = observer(({ modalVisible, setModalVisible, pressedDay }: ModalConfirmDayProps) => {
  const store = useStore()
  const { colors } = useTheme()
  const styles = makeStyles(colors)

  const handlePeriodStarts = () => {
    fillMarkedDays(pressedDay, store)
    setModalVisible(false)
  }
  const closeModal = () => {
    Alert.alert('Modal has been closed.')
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.centeredView}>
      <Modal transparent animationType="fade" visible={modalVisible} onRequestClose={() => closeModal()}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.button} onPress={() => handlePeriodStarts()}>
            <Text style={styles.textStyle}>Period starts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
})

const makeStyles = (colors: ReactNativePaper.ThemeColors) =>
  StyleSheet.create({
    centeredView: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      justifyContent: 'space-around',
      marginTop: Dimensions.get('window').height * 0.4,
      width: 220,
      height: 150,
      marginHorizontal: Dimensions.get('window').width * 0.22,
      backgroundColor: colors.background,
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
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
