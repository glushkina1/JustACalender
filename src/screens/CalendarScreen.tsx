import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Calendar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8FF',
  },
});

export default CalendarScreen;
