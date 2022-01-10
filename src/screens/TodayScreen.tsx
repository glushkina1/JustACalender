import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {useTheme} from "react-native-paper";


const TodayScreen = observer(() => {
  const { colors } = useTheme();
  const styles = makeStyles(colors)


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => null}>
        <Text>Today</Text>
      </TouchableOpacity>
    </View>
  )
})

const makeStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  calendar: {
    width: 300,
    height: 300,
  },
})

export { TodayScreen }
