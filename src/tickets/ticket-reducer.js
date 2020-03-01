import {
  TICKET_CREATE_SUCCESS,
  TICKET_FETCHED,
  GOT_TICKET_DETAILS
} from "../tickets/ticket-action";

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TICKET_FETCHED:
      return [...action.payload.tickets];
    case TICKET_CREATE_SUCCESS:
      console.log("what state, action, payload? ticket_create", [
        ...state,
        action.payload
      ]);
      return [...state, action.payload.ticket];
    case GOT_TICKET_DETAILS:
      console.log("what is action.payload?", action.payload.ticket);
      return action.payload.ticket;

    default:
      return state;
  }
};

// included new ticket in the tickets state with ...state instead of state. (deleded the 1 ...state, was there 2 times)
