import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CardColumns } from "react-bootstrap";

export default function EventList(props) {
  return (
    <div>
      <CardColumns className="mt-5">
        {props.events.map(event => {
          return (
            <Card border="dark" style={{ width: "18rem" }} key={event.id}>
              <Card.Img variant="top" src={event.imageUrl} />
              <Card.Body>
                <Card.Title> {event.name}</Card.Title>
                <Card.Text>
                  <li>{event.description}</li> <li> {event.date}</li>
                </Card.Text>
                <Link to={`/event/${event.id}/tickets`}>
                  <Button variant="dark" id={event.id}>
                    Tickets
                  </Button>
                </Link>
                {/* </a> */}
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    </div>
  );
}

// Where to put key?
// <li key={event.id}> </li>
