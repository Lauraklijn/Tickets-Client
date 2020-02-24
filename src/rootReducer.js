import { combineReducers } from "redux";
import userReducer from "../src/user/user-reducer";

export default combineReducers({
  userData: userReducer
});
