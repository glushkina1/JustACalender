/* eslint-disable */
import React, {useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import CalendarHeader from '../CalendarHeader';
import {format} from 'date-fns';

const CalendarScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showJumpToday, setShowJumpToday] = useState(false);

  let dateFormatter = (currentDate: Date) => {
    return format(currentDate, 'yyyy-MM');
  };

  const CalendarHeaderHandler = () => {
    return CalendarHeader(
      currentDate,
      setCurrentDate,
      showJumpToday,
      setShowJumpToday,
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={{...styles.calendarContainer, ...styles.itemContainer}}>
        <Calendar
          current={dateFormatter(currentDate)}
          key={dateFormatter(currentDate)}
          customHeader={CalendarHeaderHandler}
          style={styles.calendar}
          firstDay={1}
        />
      </View>
      <View style={{...styles.infoContainer, ...styles.itemContainer}}>
        <Text style={styles.infoText}>INFO</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd0d7',
  },
  calendarContainer: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  calendar: {
    justifyContent:'flex-end',
    paddingBottom:40,
    width: '100%',
    height: '90%',
    borderRadius: 30,
  },
  infoContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  itemContainer: {
    width: Dimensions.get('window').width * 0.95,
    height: Dimensions.get('window').height * 0.45,
  },
  infoText: {
    alignItems: 'center',
  },
});

export default CalendarScreen;
