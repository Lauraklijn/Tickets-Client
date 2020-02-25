import axios from "axios";

export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";

function eventsFetched(events) {
  return {
    type: EVENTS_FETCHED,
    payload: {
      events: events
    }
  };
}

export const loadEvents = () => (dispatch, getState) => {
  //if (getState().events.length !== 0) return;

  axios.get("http://localhost:4000/event").then(function(response) {
    dispatch(eventsFetched(response.data));
  });
};

function createEventSuccess(event) {
  return {
    type: EVENT_CREATE_SUCCESS,
    payload: {
      event: event
    }
  };
}

export const createEvent = (name, description, imageUrl, date) => {
  return function(dispatch, getState) {
    console.log(name, description, imageUrl, date);
    const response = axios({
      method: "POST",
      url: "http://localhost:4000/event",
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

/*
export const createEvent = (name, description, imageUrl, date) => {
  return async function(dispatch, getState) {
    //const token = getState().user.token;

    // console.log(name, description, imageUrl, date);
    // dispatch({ type: "TESTING" });

    const response = await axios({
      method: "POST",
      url: "http://localhost:4000/event",
      // headers: { authorization: `Bearer ${token}` },
      data: {
        name,
        description,
        imageUrl,
        date
      }
    });

    console.log(response);
    dispatch(createEventSuccess(response.data));
  };
};*/
