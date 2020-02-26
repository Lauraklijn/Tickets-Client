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

export const loadTickets = () => (dispatch, getState) => {
  //if (getState().events.length !== 0) return;

  axios.get("http://localhost:4000/tickets").then(function(response) {
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

export const createTicket = (name, author, description, image, price) => {
  return function(dispatch, getState) {
    console.log(name, author, description, image, price);
    const response = axios({
      method: "POST",
      url: "http://localhost:4000/tickets",
      data: {
        name,
        author,
        description,
        image,
        price
      }
    });
    dispatch(createTicketSucces(response));
  };
};

function GotTicketDetails(ticket) {
  return {
    type: GOT_TICKET_DETAILS,
    payload: {
      ticket
    }
  };
}

export const TicketDetails = id => (dispatch, getState) => {
  axios.get(`http://localhost:4000/tickets/${id}`).then(function(response) {
    dispatch(GotTicketDetails(response.data));
  });
};
