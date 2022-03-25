import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

// interface Props {
//     modalVisible: boolean
//     setLanguage: React.Dispatch<React.SetStateAction<boolean>>
//     language: string
// }

export const EditProfileButton = () => {
  return (
    <TouchableOpacity onPress={() => null}>
      <Icons color="grey" name="pencil" size={25} />
    </TouchableOpacity>
  )
}
