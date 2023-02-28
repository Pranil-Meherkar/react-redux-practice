import { DEFEAT_ENEMY } from "./enemyTypes";

const initialState = {
  numOfEnemies: 100,
};

const enemyReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFEAT_ENEMY:
      return {
        ...state,
        numOfEnemies: state.numOfEnemies - action.payload,
      };
    default:
      return state;
  }
};

export default enemyReducer;
