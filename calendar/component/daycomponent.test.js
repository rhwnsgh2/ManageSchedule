import React from 'react';
import DayComponent from './daycomponent';
import {render} from '@testing-library/react-native';
import {expect} from '@jest/globals';
import {toHaveStyle} from '@testing-library/jest-native';
import '@testing-library/jest-native/extend-expect';
import {stylesDay} from './daycomponent';

const getTempComponent = props => {
  return <DayComponent {...props} />;
};

describe('DayComponent Render Testing', () => {
  let date = {
    year: 2021,
    month: 9,
    day: 2,
  };
  it('renders Correctly', () => {
    const rendered = render(getTempComponent({date: date}));
    expect(rendered).toBeTruthy();
  });

  describe('Render Day Text correct and style', () => {
    it('render day text', () => {
      const {getByTestId} = render(getTempComponent({date: date}));
      const element = getByTestId('DayText');
      expect(element).not.toBeNull();
    });

    it('render disable Text', () => {
      const {getByTestId} = render(
        getTempComponent({date: date, state: 'disabled'}),
      );
      const element = getByTestId('DayText');
      expect.extend({toHaveStyle});
      expect(element).toHaveStyle(stylesDay.disableText);
    });

    it('render enable Text', () => {
      const {getByTestId} = render(
        getTempComponent({date: date, state: 'enabled'}),
      );
      const element = getByTestId('DayText');
      expect.extend({toHaveStyle});
      expect(element).toHaveStyle(stylesDay.enableText);
    });
  });
});
