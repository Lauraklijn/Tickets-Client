import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function TicketList(props) {
  return (
    <div>
      {props.tickets &&
        props.tickets.length > 0 &&
        props.tickets.map(ticket => {
          return (
            <Card style={{ width: "18rem" }} key={ticket.id}>
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

export default TicketList;
