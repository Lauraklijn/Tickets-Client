import { EVENT_CREATE_SUCCESS, EVENTS_FETCHED } from "../events/event-action";

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case EVENTS_FETCHED:
      return [...state, ...action.payload.events]; //allEvents: [...action.payload]

    case EVENT_CREATE_SUCCESS:
      return [...state, action.payload.event];
    // return { ...state };

    default:
      return state;
  }
};
