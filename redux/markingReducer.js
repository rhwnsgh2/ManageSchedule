export const SET_MARKING = 'SET_MARKING';

const markedInitialState = {
  date: '',
};
export const setMarking = marked => {
  return {
    type: SET_MARKING,
    marked: marked,
  };
};

export const markingReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_MARKING:
      return {...state, marked: action.marked};
    default:
      return state;
  }
};
