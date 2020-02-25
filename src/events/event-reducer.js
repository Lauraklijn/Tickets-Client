import { EVENT_CREATE_SUCCESS } from "../events/event-action";
import { ALL_EVENTS } from "../events/event-action";

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ALL_EVENTS:
      return {
        ...action.payload
        //allEvents: [...action.payload]
      };
    case EVENT_CREATE_SUCCESS:
      return [...state, action.payload.event];
    // return { ...state };

    default:
      return state;
  }
};
