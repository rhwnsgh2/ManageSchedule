/**
 * @format
 */

import 'react-native';
import React from 'react';
import DayComponent from '../calendar/component/daycomponent';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {it} from '@jest/globals';

it('DayComponent - date object is correct', () => {
  const date = {
    day: 1,
    month: 1,
    year: 2017,
    timestamp: 'timestamp',
    dateString: '2016-05-13',
  };
  renderer.create(<DayComponent date={date} />);
});

it('DayComponent - date object is not correct', () => {
  const date = null;
  renderer.create(<DayComponent date={date} />);
});
