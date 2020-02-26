import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function EventList(props) {
  //if (!props.events) return "Loading";

  return (
    <div>
      {props.events.map(event => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={event.imageUrl} />
            <Card.Body>
              <Card.Title> {event.name}</Card.Title>
              <Card.Text>
                {event.description} {event.date}
              </Card.Text>
              <Button variant="primary">Find Tickets</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

// Where to put key?

// <li key={event.id}>
// {" "}
// Name:  Description: Image
// {event.imageUrl} Date:
// </li>
