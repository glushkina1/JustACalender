import React from 'react'
import { Alert, Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {lightTheme} from "./colors"
import { fillMarkedDays } from './fillMarkedDays'
import {DateData} from "react-native-calendars/src/types";

interface ModalConfirmDayProps {
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  selectedDay: DateData | undefined
}

const ModalConfirmDay = ({ modalVisible, setModalVisible, selectedDay }: ModalConfirmDayProps) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.button} onPress={() => fillMarkedDays(selectedDay)}>
            <Text style={styles.textStyle}>Period starts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    justifyContent:'space-around',
    marginTop: Dimensions.get('window').height * 0.4,
    width: 220,
    height: 150,
    marginHorizontal: Dimensions.get('window').width * 0.22,
    backgroundColor: lightTheme.background,
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
