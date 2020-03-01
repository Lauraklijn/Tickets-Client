import axios from "axios";

export const TICKET_CREATE_SUCCESS = "TICKET_CREATE_SUCCESS";
export const TICKET_FETCHED = "TICKET_FETCHED";
export const GOT_TICKET_DETAILS = "GOT_TICKET_DETAILS";

function ticketFetched(tickets) {
  return {
    type: TICKET_FETCHED,
    payload: {
      tickets: tickets
    }
  };
}

//Matched endpoint with server api (events/id/tickets), to see only the tickets from that event
export const loadTickets = eventId => (dispatch, getState) => {
  axios
    .get(`http://localhost:5050/events/${eventId}/tickets`)
    .then(function(response) {
      dispatch(ticketFetched(response.data));
    });
};

function createTicketSucces(ticket) {
  return {
    type: TICKET_CREATE_SUCCESS,
    payload: {
      ticket
    }
  };
}

// ------------Create Ticket-----------------------

export const createTicket = (
  name,
  author,
  description,
  image,
  price,
  eventId
) => async (dispatch, getState) => {
  const token = getState().userData.jwt;
  // console.log("What is token in create ticket??", token);
  // console.log("checking action ", eventId);

  const response = await axios({
    method: "POST",
    url: "http://localhost:5050/tickets",
    headers: { Authorization: `Bearer ${token.token}` },
    data: {
      name,
      author,
      description,
      image,
      price,
      eventId
    }
  });
  //console.log("check ticket response", response.data);

  dispatch(createTicketSucces(response.data));
};

// To get one ticket info

function GotTicketDetails(ticket) {
  return {
    type: GOT_TICKET_DETAILS,
    payload: {
      ticket
    }
  };
}

export const TicketDetails = id => (dispatch, getState) => {
  axios.get(`http://localhost:5050/tickets/${id}`).then(function(response) {
    dispatch(GotTicketDetails(response.data));
  });
};
