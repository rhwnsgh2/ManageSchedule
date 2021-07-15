export const SET_WORK = 'SET_WORK';

const workInitialState = {
  date: '',
};
export const setWork = work => {
  return {
    type: SET_WORK,
    work: work,
  };
};

export const workReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_WORK:
      return {...state, work: action.work};
    default:
      return state;
  }
};
