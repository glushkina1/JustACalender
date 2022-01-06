import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useStore} from "../store";
import {ClassPeriodType} from "../types";

const TodayScreen = () => {
  const rootStore = useStore()
  return (
    <View style={styles.container}>
      {rootStore.classes.items.map((item: ClassPeriodType) => {
        return (
            <View key={`${item.id}`} style={{marginBottom: 15}}>
            <Text>{item.dateStart}</Text>
            </View>
        );
      })}
      <Text>Today Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8FF',
  },
  calendar: {
    width: 300,
    height: 300,
  },
})

export { TodayScreen }
