const SET_CHOSEN_DATE = 'home/SET_CHOSEN_DATE';

let initialState = {
  chosenDate: new Date(),
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHOSEN_DATE:
      return {
        ...state,
        chosenDate: action.payload.date,
      };
    default:
      return state;
  }
};

// @ACTION CREATORS
export const setChosenDate = (date) => ({
  type: SET_CHOSEN_DATE,
  payload: {date},
});

export default homeReducer;
