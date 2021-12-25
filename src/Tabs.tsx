import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import ProfileScreen from './screens/ProfileScreen';
import TodayScreen from './screens/TodayScreen';
import CalendarScreen from './screens/CalendarScreen';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
Ionicons.loadFont();
const Tabs = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Today"
          screenOptions={({route}: any) => ({
            headerShown: false,
            tabBarIcon: ({focused, size, color}) => {
              let iconName;
              if (route.name === 'Today') {
                iconName = focused ? 'flower' : 'flower-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              } else if (route.name === 'Calendar') {
                iconName = focused ? 'calendar' : 'calendar-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarOptions: {
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'grey',
            },
          })}>
          <Tab.Screen name="Today" component={TodayScreen} />
          <Tab.Screen name="Calendar" component={CalendarScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor:'red',
    // borderWidth:5,
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.95,
    height: Dimensions.get('window').height * 0.9,
  },
});
export default Tabs;
