import { combineReducers } from "redux";
import userReducer from "../src/user/user-reducer";
import eventReducer from "../src/events/event-reducer";
import ticketReducer from "../src/tickets/ticket-reducer";

export default combineReducers({
  userData: userReducer,
  eventData: eventReducer,
  ticketReducer: ticketReducer
});
