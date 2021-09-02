import React from 'react';
import DayComponent, {WorkComponent} from './daycomponent';
import {render} from '@testing-library/react-native';
import {expect} from '@jest/globals';
import {toHaveStyle} from '@testing-library/jest-native';
import '@testing-library/jest-native/extend-expect';
import {stylesDay} from './daycomponent';
import calcWork from '../../lib/calcWork';

const getDayComponent = props => {
  return <DayComponent {...props} />;
};

const getWorkComponent = props => {
  return <WorkComponent {...props} />;
};

describe('DayComponent Testing', () => {
  let date = {
    year: 2021,
    month: 9,
    day: 2,
  };
  it('renders Correctly', () => {
    const rendered = render(getDayComponent({date: date}));
    expect(rendered).toBeTruthy();
  });

  describe('Render Day Text correct and style', () => {
    it('render day text', () => {
      const {getByTestId} = render(getDayComponent({date: date}));
      getByTestId('DayText');
    });

    it('render disable Text', () => {
      const {getByTestId} = render(
        getDayComponent({date: date, state: 'disabled'}),
      );
      const element = getByTestId('DayText');
      expect.extend({toHaveStyle});
      expect(element).toHaveStyle(stylesDay.disableText);
    });

    it('render enable Text', () => {
      const {getByTestId} = render(
        getDayComponent({date: date, state: 'enabled'}),
      );
      const element = getByTestId('DayText');
      expect.extend({toHaveStyle});
      expect(element).toHaveStyle(stylesDay.enableText);
    });
  });

  describe('WorkComponent Testing', () => {
    it('DayComponent calls WorkComponent correct', () => {
      const {getByTestId} = render(
        getDayComponent({date: date, state: 'enabled'}),
      );
      getByTestId('WorkComponent');
    });

    it('WorkComponent render if work.use == true', () => {
      const schedule = calcWork(date.year, date.month, date.day);
      const work = {use: true, schedule: schedule};
      const {getByTestId} = render(getWorkComponent({work}));
      getByTestId('WorkComponent_Schedule');
    });

    it('WorkComponent is not render if work.use == false', () => {
      const schedule = calcWork(date.year, date.month, date.day);
      const work = {use: false, schedule: schedule};
      const {queryByTestId} = render(getWorkComponent({work}));
      expect(queryByTestId('WorkComponent_Schedule')).toBeNull();
    });

    it('WorkComponent render Schedule correct', () => {
      const schedule = calcWork(date.year, date.month, date.day);
      let work = {use: true, schedule: schedule};
      const {getByText} = render(getWorkComponent({work}));
      expect(getByText('BRK')).not.toBeNull();
    });
  });
});
