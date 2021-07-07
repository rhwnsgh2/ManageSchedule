import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import DayComponent from './component/daycomponent';
import settingCal from './setting';
import * as height from '../lib/setHeight';
const CalendarComponent = () => {
  settingCal();
  return (
    <Calendar
      // Initially visible month. Default = Date()
      style={styles.calendarContainer}
      theme={{
        textMonthFontSize: 18,
        'stylesheet.calendar.header': {
          header: {
            height: height.calendarHeader,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 6,
            alignItems: 'center',
          },
          dayTextAtIndex0: {
            color: 'red',
          },
          dayTextAtIndex1: {
            color: 'black',
          },
          dayTextAtIndex2: {
            color: 'black',
          },
          dayTextAtIndex3: {
            color: 'black',
          },
          dayTextAtIndex4: {
            color: 'black',
          },
          dayTextAtIndex5: {
            color: 'black',
          },
          dayTextAtIndex6: {
            color: 'blue',
          },
        },
      }}
      current={Date()}
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={'2021-07-01'}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate={'2021-07-31'}
      // Handler which gets executed on day press. Default = undefined
      onDayPress={day => {
        console.log('selected day', day);
      }}
      // Handler which gets executed on day long press. Default = undefined
      onDayLongPress={day => {
        console.log('selected day', day);
      }}
      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
      monthFormat={'yyyy년 MMMM'}
      onMonthChange={month => {
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        console.log('month changed', month);
      }}
      // Hide month navigation arrows. Default = false
      hideArrows={true}
      // Replace default arrows with custom ones (direction can be 'left' or 'right')
      renderArrow={direction => <Arrow />}
      // Do not show days of other months in month page. Default = false
      hideExtraDays={false}
      // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
      // day from another month that is visible in calendar page. Default = false
      disableMonthChange={true}
      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
      firstDay={0}
      // Hide day names. Default = false
      hideDayNames={false}
      // Show week numbers to the left. Default = false
      showWeekNumbers={false}
      // Handler which gets executed when press arrow icon left. It receive a callback can go back month
      onPressArrowLeft={subtractMonth => subtractMonth()}
      // Handler which gets executed when press arrow icon right. It receive a callback can go next month
      onPressArrowRight={addMonth => addMonth()}
      // Disable left arrow. Default = false
      disableArrowLeft={true}
      // Disable right arrow. Default = false
      disableArrowRight={true}
      // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
      disableAllTouchEventsForDisabledDays={true}
      // Replace default month and year title with custom one. the function receive a date as parameter
      // renderHeader={date => {
      //   /*Return JSX*/
      // }}
      // Enable the option to swipe between months. Default = false
      enableSwipeMonths={true}
      markedDates={{
        '2021-07-16': {
          customStyles: {
            container: {
              borderWidth: 1,
              borderBottomColor: 'black',
            },
          },
        },
      }}
      markingType={'multi-dot'}
      dayComponent={DayComponent}
    />
  );
};

export default CalendarComponent;

const styles = StyleSheet.create({
  calendarContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    height: '100%',
    width: '100%',
  },
});
