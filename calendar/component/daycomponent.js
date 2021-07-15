import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import calcWork from '../../lib/calcWork';
import * as height from '../../lib/setHeight';

const DayComponent = ({date, state, marking}) => {
  const schedule = calcWork(date.year, date.month, date.day);
  const work = {use: true, schedule: schedule};
  return (
    <TouchableOpacity
      style={[styles.dayContainer, {height: height.dayComponent}]}>
      <View style={stylesDay.container}>
        <Text
          style={[
            stylesDay.text,
            state === 'disabled' ? stylesDay.disableText : stylesDay.enableText,
          ]}>
          {date.day}
        </Text>
      </View>
      <WorkComponent work={work} />
      <View style={stylesSchedule.container}>
        <Text>dd </Text>
      </View>
    </TouchableOpacity>
  );
};

const WorkComponent = ({work}) => {
  if (work && work.use) {
    return (
      <View style={stylesWork.container}>
        <Text>{work.schedule}</Text>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  dayContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderRadius: 20,
  },
  disableText: {
    color: 'gray',
  },
});

const stylesWork = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'blue',
  },
});

const stylesDay = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'left',
  },
  enableText: {
    color: 'black',
  },
  disableText: {
    color: 'gray',
  },
});

const stylesSchedule = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
});
export default DayComponent;
