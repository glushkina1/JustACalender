import React, {useContext} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useTheme} from 'react-native-paper'
import { IRootStore } from 'src/store/rootStore'
import AntDesign from 'react-native-vector-icons/AntDesign'

import {languageList} from '../constants'
import {LocalizationContext} from '../locale/LocalizationContext'
import { AdditionalColors } from '../styles/globalColors'

void AntDesign.loadFont()

interface LanguageListProps {
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    store: IRootStore
}

const LanguageList = ({setModalVisible, store}: LanguageListProps) => {
    const {colors} = useTheme()
    const styles = makeStyles(colors)
    const {setAppLanguage} = useContext(LocalizationContext)

    const handleLanguage = (lang: string) => {
        setAppLanguage(lang)
        setModalVisible(false)
    }


    return (
            <FlatList
                data={Object.keys(languageList)}
                renderItem={({item}) => (
                    <TouchableOpacity key={item} onPress={() => handleLanguage(item)}>
                        <View style={styles.languageItem}>
                            <Text style={styles.text}>{languageList[item]}</Text>
                            <Text style={styles.text}>{(item === store.language) ?
                                <AntDesign color={AdditionalColors.blue} name="check" size={35}
                                /> : ''}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
    )
}

const makeStyles = (colors: ReactNativePaper.ThemeColors) =>
    StyleSheet.create({
        text: {
            color: colors.text,
            textAlign: 'center',
            fontSize: 22,
        },
        languageItem: {
            justifyContent:'space-between',
            flexGrow:1,
            flexDirection:'row',
            marginTop:10,
            marginHorizontal:70,
            alignItems:'baseline',
        },
    })
export {LanguageList}
