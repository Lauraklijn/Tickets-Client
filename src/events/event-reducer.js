import { EVENT_CREATE_SUCCESS, EVENTS_FETCHED } from "../events/event-action";
//import { FETCH_EVENT_SUCCESS } from "../events/event-action";

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case EVENTS_FETCHED:
      return [...action.payload.events];

    case EVENT_CREATE_SUCCESS:
      return [...state, action.payload.event];

    // case FETCH_EVENT_SUCCESS:
    //   return [...action.payload.event];
    default:
      return state;
  }
};
