import { TICKET_CREATE_SUCCESS } from "../tickets/ticket-action";

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TICKET_CREATE_SUCCESS:
      return [...state, [...state, action.payload]];

    default:
      return state;
  }
};
