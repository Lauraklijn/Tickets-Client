import axios from "axios";

export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";
export const FETCH_EVENT_SUCCESS = "FETCH_EVENT_SUCCESS";

function eventsFetched(events) {
  return {
    type: EVENTS_FETCHED,
    payload: {
      events: events
    }
  };
}

export const loadEvents = () => (dispatch, getState) => {
  axios.get("http://localhost:5050/event").then(function(response) {
    dispatch(eventsFetched(response.data));
  });
};

// ------ Create Events --------------

function createEventSuccess(event) {
  return {
    type: EVENT_CREATE_SUCCESS,
    payload: {
      event: event
    }
  };
}

// ---------- AUTH (Is not working yet) ------------- (Connection error), Still working on it

export const createEvent = (name, description, imageUrl, date) => {
  return async function(dispatch, getState) {
    console.log("what is token", getState());
    const token = getState().userData.token;
    console.log("WHAT IS??", name, description, imageUrl, date);
    const response = await axios({
      method: "POST",
      url: "http://localhost:5050/event",
      headers: { autorization: `Bearer ${token}` },
      data: {
        name,
        description,
        imageUrl,
        date
      }
    });
    dispatch(createEventSuccess(response));
  };
};

// ONE event, niet nodig

function fetchEventSucces(event) {
  return {
    type: FETCH_EVENT_SUCCESS,
    payload: {
      event: event
    }
  };
}
export const loadEvent = id => (dispatch, getState) => {
  const state = getState().event;
  if (state && state.id === id) return;
  axios.get("http://localhost:5050/event/{id}").then(function(response) {
    dispatch(fetchEventSucces(response.data));
  });
};
