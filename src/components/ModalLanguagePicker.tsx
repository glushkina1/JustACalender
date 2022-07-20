import {observer} from 'mobx-react-lite'
import React, {useContext} from 'react'
import {Alert, Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useTheme} from 'react-native-paper'
import {LocalizationContext} from '../locale/LocalizationContext'

import {useStore} from '../store/rootStore'

import {LanguageList} from './LanguageList'

interface ModalLanguagePickerProps {
    modalVisible: boolean
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalLanguagePicker = observer(({modalVisible, setModalVisible}: ModalLanguagePickerProps) => {
    const store = useStore()
    const {translations} = useContext(LocalizationContext)
    const {colors} = useTheme()
    const styles = makeStyles(colors)

    const closeModal = () => {
        Alert.alert('Changes will not be applied')
        setModalVisible(!modalVisible)
    }

    return (
        <Modal transparent animationType="fade" visible={modalVisible} onRequestClose={() => closeModal()}>
            <View style={styles.modalView}>
                <View style={styles.titleContainer}>
                    <Text style={styles.text}>{translations.chooseLanguage}</Text>
                </View>
                <View style={styles.languageListContainer}>
                    <LanguageList setModalVisible={setModalVisible} store={store}/>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => closeModal()}>
                        <Text style={styles.text}>{translations.cancel}</Text>
                    </TouchableOpacity>
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
            backgroundColor: colors.tab,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        text: {
            color: colors.text,
            textAlign: 'center',
            fontSize: 22,
        },
        buttonContainer: {
            flex: 1,
        },
        button: {
            borderRadius: 10,
            padding: 10,
            elevation: 2,
            backgroundColor: colors.greyBlack,
            alignSelf: 'center',
            width: Dimensions.get('window').width * 0.4,
            justifyContent: 'center',
        },
        titleContainer: {
            marginTop: 40,
            flex: 2,
            alignContent: 'center',
            justifyContent: 'center',
        },
        languageListContainer: {
            flex: 4,
        },
    })

export {ModalLanguagePicker}
