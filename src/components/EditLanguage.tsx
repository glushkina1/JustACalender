import {TouchableOpacity, View} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'

// interface Props {
//     modalVisible: boolean
//     setLanguage: React.Dispatch<React.SetStateAction<boolean>>
//     language: string
// }

export const EditLanguageButton = () => {


    return (
        <View>
            <TouchableOpacity onPress={() => null}>
                <Icons name="pencil" size={25} color="grey" />
            </TouchableOpacity>
        </View>


    )
}
