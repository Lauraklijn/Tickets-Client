import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function EventList(props) {
  return (
    <div>
      {props.events.map(event => {
        return (
          <Card style={{ width: "18rem" }} key={event.id}>
            <Card.Img variant="top" src={event.imageUrl} />
            <Card.Body>
              <Card.Title> {event.name}</Card.Title>
              <Card.Text>
                <li>{event.description}</li> <li> {event.date}</li>
              </Card.Text>
              <Link to={`/event/${event.id}/tickets`}>
                <Button variant="primary" id={event.id}>
                  Find Tickets
                </Button>
              </Link>
              {/* </a> */}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

// Where to put key?
// <li key={event.id}> </li>
