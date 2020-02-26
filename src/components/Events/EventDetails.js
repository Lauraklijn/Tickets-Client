import React from "react";

function EventDetails(props) {
  if (!props.event.name) return "Loading";

  return (
    <div>
      {props.event.name}
      <ul>
        {props.event.tickets.map(ticket => {
          return (
            <li key={ticket.id}>
              {ticket.name} : {ticket.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EventDetails;
