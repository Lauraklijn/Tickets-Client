import {
  TICKET_CREATE_SUCCESS,
  TICKET_FETCHED,
  GOT_TICKET_DETAILS
} from "../tickets/ticket-action";
//import { FETCH_EVENT_SUCCESS } from "../events/event-action";

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case FETCH_EVENT_SUCCESS:
    //   return [...action.payload.event];
    case TICKET_FETCHED:
      return [...state, ...action.payload.tickets];
    case TICKET_CREATE_SUCCESS:
      return [...state, [...state, action.payload]];
    case GOT_TICKET_DETAILS:
      console.log("what is action.payload?", action.payload);
      return action.payload.ticket;

    default:
      return state;
  }
};
