import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DayComponent = ({date, state, marking}) => {
  const work = undefined;
  return (
    <View style={styles.dayContainer}>
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
    </View>
  );
};

const WorkComponent = ({work}) => {
  if (work && work.use) {
    return (
      <View style={stylesWork.container}>
        <Text>MID</Text>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  dayContainer: {
    flexDirection: 'column',
    height: 50,
    alignItems: 'center',
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
    textAlign: 'center',
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
