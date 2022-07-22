import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { LocalizationContext } from '../locale/LocalizationContext'
import { CalendarScreen } from '../screens/CalendarScreen'
import { SettingsScreen } from '../screens/SettingsScreen'
import { TodayScreen } from '../screens/TodayScreen'

const Tab = createBottomTabNavigator()
void Ionicons.loadFont()

const Tabs = observer(({}) => {
  const { colors } = useTheme()
  const { translations } = useContext(LocalizationContext)

  const focusedRouteIcons: Record<string, string> = {
    Today: 'flower',
    Settings: 'settings',
    Calendar: 'calendar',
  }
  const unfocusedRouteIcons: Record<string, string> = {
    Today: 'flower-outline',
    Settings: 'settings-outline',
    Calendar: 'calendar-outline',
  }
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Calendar"
        screenOptions={({ route }: any) => ({
          tabBarStyle: {
            height: 90,
            paddingTop: 8,
            backgroundColor: colors.tab,
            borderTopColor: 'grey',
            borderTopWidth: 1,
          },
          tabBarLabelStyle: { fontSize: 13, marginTop: 5 },
          tabBarActiveTintColor: colors.background,
          tabBarInactiveTintColor: colors.tabsInactive,
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            let label: string
            let color: string
            if (focused) {
              color = colors.tabsActive
            } else {
              color = colors.tabsInactive
            }
            if (route.name === 'Today') {
              label = translations.today
            } else if (route.name === 'Calendar') {
              label = translations.calendar
            } else {
              label = translations.settings
            }
            return <Text style={{ color }}>{label}</Text>
          },
          tabBarIcon: ({ focused }) => {
            let iconName: string
            let color: string
            if (focused) {
              color = colors.tabsActive
              iconName = focusedRouteIcons[route.name]
            } else {
              color = colors.tabsInactive
              iconName = unfocusedRouteIcons[route.name]
            }
            return <Ionicons color={color} name={iconName} size={25} />
          },
        })}
      >
        <Tab.Screen component={TodayScreen} name="Today" />
        <Tab.Screen component={CalendarScreen} name="Calendar" />
        <Tab.Screen component={SettingsScreen} name="Settings" />
      </Tab.Navigator>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height * 0.9,
  },
})
export default Tabs
