import {observer} from 'mobx-react-lite'
import React, {useContext, useState} from 'react'
import {Alert, Dimensions, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {useTheme} from 'react-native-paper'
import { makeGlobalStyles } from '../../../styles/globalStyles'

import {LocalizationContext} from '../../../locale/LocalizationContext'

import {useStore} from '../../../store/rootStore'


interface IModalPeriodLength {
    modalPeriodLengthVisible: boolean
    setModalPeriodLengthVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalPeriodLength = observer(({modalPeriodLengthVisible, setModalPeriodLengthVisible}: IModalPeriodLength) => {
    const store = useStore()
    const period = store.periodLength
    const {translations} = useContext(LocalizationContext)
    const {colors} = useTheme()
    const styles = makeStyles(colors)
    const globalStyles = makeGlobalStyles(colors)

    const [currentPeriod, setCurrentPeriod] = useState(period.toString());

    const closeModal = () => {
        Alert.alert(translations.changesNotSaved)
        setModalPeriodLengthVisible(!modalPeriodLengthVisible)
    }

    const handleNumber = (number: string) => {
        const modified = (number.replace(/\D/g, ""))
        setCurrentPeriod(modified)
    }

    const updatePeriodLength = () => {
        store.changePeriodLength(parseInt(currentPeriod))
        setModalPeriodLengthVisible(false)
    }

    return (
        <Modal transparent animationType="fade" visible={modalPeriodLengthVisible} onRequestClose={() => closeModal()}>
            <View style={styles.modalView}>
                <View style={styles.titleContainer}>
                    <Text style={globalStyles.text}>{translations.enterPeriod}</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        keyboardType="number-pad"
                        onChangeText={text => handleNumber(text)}
                        value={currentPeriod}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => closeModal()}>
                        <Text style={globalStyles.text}>{translations.cancel}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={() => updatePeriodLength()}>
                        <Text style={globalStyles.text}>{translations.save}</Text>
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
        input: {
            height: 40,
            marginHorizontal:40,
            paddingLeft:30,
            borderWidth: 1,
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            fontSize:18,
        },
        buttonsContainer: {
            flex: 2,
            flexDirection:'row',
            justifyContent:'space-evenly',
        },
        cancelButton: {
            backgroundColor: colors.greyBlack,
        },
        saveButton: {
            backgroundColor: colors.buttonSave,
        },
        button: {
            borderRadius: 10,
            padding: 10,
            elevation: 2,
            alignSelf: 'flex-start',
            width: Dimensions.get('window').width * 0.4,
        },
        titleContainer: {
            flex: 1,
            alignContent: 'center',
            justifyContent: 'flex-end',
        },
        inputContainer: {
            flex:1,
            justifyContent:'center',
        }
    })

export {ModalPeriodLength}
