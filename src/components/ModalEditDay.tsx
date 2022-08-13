import {observer} from 'mobx-react-lite'
import React from 'react'
import {Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useTheme} from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {iconSize} from '../constants'

void Ionicons.loadFont()

interface ModalProps {
    modalEditDayVisible: boolean
    setModalEditDayVisible: React.Dispatch<React.SetStateAction<boolean>>
    pressedDay: string
}

const ModalEditDay = observer(({modalEditDayVisible, setModalEditDayVisible}: ModalProps) => {
    const {colors} = useTheme()
    const styles = makeStyles(colors)

    const closeModal = () => {
        setModalEditDayVisible(!modalEditDayVisible)
    }
    return (
            <Modal transparent animationType="fade" visible={modalEditDayVisible} onRequestClose={() => closeModal()}>
                <View style={styles.modalView}>
                    <View style={styles.row}>
                        <View style={styles.row}>
                            <View style={{alignSelf: 'center'}}>
                                <Ionicons color='yellow' name="warning" size={iconSize}/>
                            </View>
                            <Text style={styles.textTitle}>This date is already selected</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.row} onPress={() => null}>
                            <Text style={styles.textButton}>You wanna start?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.row} onPress={() => null}>
                            <Text style={styles.textButton}>You wanna end?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.row} onPress={() => closeModal()}>
                        <Text style={styles.textButton}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
    )
})

const makeStyles = (colors: ReactNativePaper.ThemeColors) =>
    StyleSheet.create({
        modalView: {
            justifyContent: 'space-evenly',
            marginTop: Dimensions.get('window').height * 0.25,
            width: '90%',
            height: 370,
            borderRadius: 20,
            backgroundColor: colors.background,
            padding: 20,
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
        row: {
            flexDirection:'row',
            borderRadius: 20,
            padding: 5,
            alignSelf: 'center',
        },
        textTitle: {
            padding: 10,
            fontSize: 22,
            color: colors.text,
            alignSelf: 'center',
        },
        buttonChoice: {
            width: '80%',
            color: colors.text,
        },
        textButton: {
            color: colors.text,
            fontSize: 18,
            width: '50%',
            textAlign: 'center',
            padding: 5,
        },
    })


export {ModalEditDay}
