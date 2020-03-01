import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardColumns } from "react-bootstrap";

function TicketList(props) {
  return (
    <div>
      <CardColumns className="mt-5">
        {props.tickets &&
          props.tickets.length > 0 &&
          props.tickets.map(ticket => {
            return (
              <Card border="dark" style={{ width: "18rem" }} key={ticket.id}>
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
                    <Button variant="dark">Ticket details</Button>{" "}
                  </a>
                </Card.Body>
              </Card>
            );
          })}
      </CardColumns>
    </div>
  );
}

export default TicketList;
