import { combineReducers } from "redux";
import enemyReducer from "./enemies/enemyReducer";
import { teammateReducer } from "./teammates/teammateReducer";
import userReducer from "./user/userReducers";

export const rootReducer = combineReducers({
  enemy: enemyReducer,
  teammate: teammateReducer,
  user: userReducer,
});
