import { TEAMMATE_LOST } from "./teammateTypes";

const initialState = {
  numOfTeammates: 4,
};

export const teammateReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEAMMATE_LOST:
      return {
        ...state,
        numOfTeammates: state.numOfTeammates - 1,
      };
    default:
      return state;
  }
};
