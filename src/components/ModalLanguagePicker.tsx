import React from 'react'
import { Alert, Dimensions, Modal, StyleSheet, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import { observer } from 'mobx-react-lite'
import { useStore } from '../store/rootStore'
import { LanguageList } from './LanguageList'

interface ModalLanguagePickerProps {
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalLanguagePicker = observer(({ modalVisible, setModalVisible }: ModalLanguagePickerProps) => {
  const store = useStore()
  const { colors } = useTheme()
  const styles = makeStyles(colors)

  // const handleLanguage = () => {
  //   setModalVisible(false)
  // }
  const closeModal = () => {
    Alert.alert('Modal has been closed.')
    setModalVisible(!modalVisible)
  }

  return (
    <Modal transparent={true}  animationType="fade" visible={modalVisible} onRequestClose={() => closeModal()}>
      <View style={styles.modalView}>
        <View
          style={{
            flex:1,
            justifyContent: 'center',
            alignSelf: 'center',
            width: Dimensions.get('window').width * 0.85,
            marginHorizontal: Dimensions.get('window').width * 0.1,
            marginVertical: Dimensions.get('window').height * 0.2,
          }}
        >
          <LanguageList store={store}  setModalVisible={setModalVisible}/>
        </View>
      </View>
    </Modal>
  )
})

const makeStyles = (colors: any) =>
  StyleSheet.create({
    modalView: {
      flex: 1,
      justifyContent: 'center',
      width: Dimensions.get('window').width,
      backgroundColor: colors.tab,
      borderRadius: 20,
      // padding: 20,
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
      // borderColor: 'blue',
      // borderWidth: 1,
      justifyContent: 'center',
    },
    textStyle: {
      color: 'black',
      fontSize: 16,
      textAlign: 'center',
    },
  })

export { ModalLanguagePicker }
