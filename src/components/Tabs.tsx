import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { CalendarScreen } from '../screens/CalendarScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { TodayScreen } from '../screens/TodayScreen'

const Tab = createBottomTabNavigator()
void Ionicons.loadFont()


const Tabs = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Calendar"
          screenOptions={({ route }: any) => ({
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              let iconName = ""
              if (route.name === 'Today') {
                iconName = focused ? 'flower' : 'flower-outline'
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline'
              } else if (route.name === 'Calendar') {
                iconName = focused ? 'calendar' : 'calendar-outline'
              }
              return <Ionicons color={color} name={iconName} size={size} />
            },
          })}
        >
          <Tab.Screen component={TodayScreen} name="Today" />
          <Tab.Screen component={CalendarScreen} name="Calendar" />
          <Tab.Screen component={ProfileScreen} name="Profile" />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height * 0.9,
  },
})
export default Tabs
