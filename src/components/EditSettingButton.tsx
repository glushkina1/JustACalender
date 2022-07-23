import React, {useState} from 'react'
import {TouchableOpacity, View} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ModalCycleLength } from './ModalCycleLength'
import {ModalLanguagePicker} from './ModalLanguagePicker'
import {ModalNameInput} from './ModalNameInput'
import { ModalPeriodLength } from './ModalPeriodLength'


interface IEditSettingButton {
    content?: string | number,
    typeContent: string
}


export const EditSettingButton = ({typeContent}: IEditSettingButton) => {

    const [modalLanguageListVisible, setModalLanguageListVisible] = useState<boolean>(false)
    const [modalNameInputVisible, setModalNameInputVisible] = useState<boolean>(false)
    const [modalPeriodLengthVisible, setModalPeriodLengthVisible] = useState<boolean>(false)
    const [modalCycleLengthVisible, setModalCycleLengthVisible] = useState<boolean>(false)


    const handlePicker = () => {
        switch (typeContent) {
            case 'language':
                setModalLanguageListVisible(true)
                break;

            case 'userName':
                setModalNameInputVisible(true)
                break;

            case 'periodLength':
                setModalPeriodLengthVisible(true)
                break;

            case 'cycleLength':
                setModalCycleLengthVisible(true)
                break;

            default:
                console.log('error switch case EditSittingButton')
        }
    }

    return (
        <View>
            <TouchableOpacity onPress={() => handlePicker()}>
                <Icons color="grey" name="pencil" size={25}/>
            </TouchableOpacity>
            <ModalLanguagePicker modalLanguageListVisible={modalLanguageListVisible}
                                 setModalLanguageListVisible={setModalLanguageListVisible}/>
            <ModalNameInput modalNameInputVisible={modalNameInputVisible}
                            setModalNameInputVisible={setModalNameInputVisible}/>
            <ModalPeriodLength modalPeriodLengthVisible={modalPeriodLengthVisible}
                            setModalPeriodLengthVisible={setModalPeriodLengthVisible}/>
            <ModalCycleLength modalCycleLengthVisible={modalCycleLengthVisible}
                            setModalCycleLengthVisible={setModalCycleLengthVisible}/>

        </View>

    )
}