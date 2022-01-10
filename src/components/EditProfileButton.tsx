import { TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'

interface EditProps {

}

export const EditProfileButton = () => {


  return (
    <TouchableOpacity onPress={() => null}>
      <Icons name="pencil" size={30} color="grey" />
    </TouchableOpacity>
  )
}
