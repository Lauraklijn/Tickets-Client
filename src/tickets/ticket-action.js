import axios from "axios";

export const TICKET_CREATE_SUCCESS = "TICKET_CREATE_SUCCESS";

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
