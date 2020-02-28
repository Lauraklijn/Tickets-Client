import React from "react";
//import CreateTicketContainer from "../../components/Tickets/TicketListContainer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function TicketList(props) {
  console.log("what is props", props);

  console.log("...............", props.eventId);
  return (
    <div>
      //add filter eventId that checkt id before map
      {props.tickets &&
        props.tickets.length > 0 &&
        props.tickets.map(ticket => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{ticket.name}</Card.Title>
                <Card.Text>
                  <li>Description:{ticket.description} </li>{" "}
                  <li>
                    Author:
                    {ticket.author}
                  </li>
                  <li>€{ticket.price}</li>
                </Card.Text>
                <a href={`http://localhost:3000/tickets/${ticket.id}`}>
                  <Button variant="primary">Ticket details</Button>{" "}
                </a>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}

// <li key={ticket.id}>
//   <a href={`http://localhost:3000/tickets/${ticket.id}`}>
//     Name:{ticket.name}

//   </a>
// </li>

export default TicketList;
