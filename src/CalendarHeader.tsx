/* eslint-disable */

import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {addMonths, addYears, subMonths, subYears} from 'date-fns';

Icons.loadFont();
const CalendarHeader = (
  currentDate: any,
  setCurrentDate: any,
  showJumpToday: boolean,
  setShowJumpToday: any,
): object => {
  const [dateTitle, setDateTitle] = useState(
    currentDate.toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'long',
    }),
  );

  const jumpToToday = () => {
    let now = new Date();
    setCurrentDate(now);
  };

  useEffect(() => {
    const nowMonth = new Date().getMonth();
    const currentMonth = currentDate.getMonth();
    const nowYear = new Date().getFullYear();
    const currentYear = currentDate.getFullYear();

    if (nowMonth === currentMonth && nowYear === currentYear) {
      setShowJumpToday(false);
    } else {
      setShowJumpToday(true);
    }
  }, [currentDate]);

  let updatedDate: Date;

  const changeDateHandler = (value: string) => {
    switch (value) {
      case 'showNextMonth':
        updatedDate = addMonths(new Date(currentDate), 1);
        break;
      case 'showLastMonth':
        updatedDate = subMonths(new Date(currentDate), 1);
        break;
      case 'showNextYear':
        updatedDate = addYears(new Date(currentDate), 1);
        break;
      case 'showLastYear':
        updatedDate = subYears(new Date(currentDate), 1);
        break;
    }
    setCurrentDate(updatedDate);
    setDateTitle(
      updatedDate.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'long',
      }),
    );
  };

  return (
    <View
      style={{
        paddingBottom: 20,
        position: 'absolute',
        top: 20,
        left: 10,
          right:10,

      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => changeDateHandler('showLastYear')}
            style={{}}>
            <Icons name="chevron-double-left" size={30} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeDateHandler('showLastMonth')}
            style={{}}>
            <Icons name="chevron-left" size={30} color="grey" />
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 22, color: 'black'}}>{dateTitle}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => changeDateHandler('showNextMonth')}
            style={{}}>
            <Icons name="chevron-right" size={30} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeDateHandler('showNextYear')}
            style={{}}>
            <Icons name="chevron-double-right" size={30} color="grey" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
            marginTop:10,
        }}>
        <TouchableOpacity onPress={() => jumpToToday()}>
          {showJumpToday && <Text style={{color:'grey', fontSize: 17}}>Today</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CalendarHeader;
