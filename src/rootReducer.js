import { combineReducers } from "redux";
import userReducer from "../src/user/user-reducer";
import eventReducer from "../src/events/event-reducer";

export default combineReducers({
  userData: userReducer,
  eventData: eventReducer
});
