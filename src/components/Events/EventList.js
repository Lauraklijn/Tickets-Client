import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function EventList(props) {
  return (
    <div>
      {props.events.map(event => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={event.imageUrl} />
            <Card.Body>
              <Card.Title> {event.name}</Card.Title>
              <Card.Text>
                <li>{event.description}</li> <li> {event.date}</li>
              </Card.Text>
              <a href={`http://localhost:3000/event/${event.id}`}>
                <Button variant="primary">Find Tickets</Button>
              </a>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

// Where to put key?
// <li key={event.id}> </li>
