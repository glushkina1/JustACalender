import {observer} from 'mobx-react-lite'
import React, {useContext} from 'react'
import {Alert, Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useTheme} from 'react-native-paper'
import {LocalizationContext} from '../../../locale/LocalizationContext'

import {useStore} from '../../../store/rootStore'
import { makeGlobalStyles } from '../../../styles/globalStyles'

import {LanguageList} from './LanguageList'

interface IModalLanguagePicker {
    modalLanguageListVisible: boolean
    setModalLanguageListVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalLanguagePicker = observer(({modalLanguageListVisible, setModalLanguageListVisible}: IModalLanguagePicker) => {
    const store = useStore()
    const {translations} = useContext(LocalizationContext)
    const {colors} = useTheme()
    const styles = makeStyles(colors)
    const globalStyles = makeGlobalStyles(colors)

    const closeModal = () => {
        Alert.alert('Изменения не применены')
        setModalLanguageListVisible(!modalLanguageListVisible)
    }

    return (
        <Modal transparent animationType="fade" visible={modalLanguageListVisible} onRequestClose={() => closeModal()}>
            <View style={styles.modalView}>
                <View style={styles.titleContainer}>
                    <Text style={globalStyles.text}>{translations.chooseLanguage}</Text>
                </View>
                <View style={styles.languageListContainer}>
                    <LanguageList setModalVisible={setModalLanguageListVisible} store={store}/>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => closeModal()}>
                        <Text style={globalStyles.text}>{translations.cancel}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    )
})

const makeStyles = (colors: ReactNativePaper.ThemeColors) =>
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
