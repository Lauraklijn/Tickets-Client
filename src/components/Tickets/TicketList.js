import React from "react";

function TicketList(props) {
  console.log("what is props", props);

  return (
    <div>
      <ul>
        {props.tickets.map(ticket => {
          return (
            <li key={ticket.id}>
              <a href={`http://localhost:3000/tickets/${ticket.id}`}>
                Name:{ticket.name}
                Description:{ticket.description} Author:{ticket.author} Price:
                {ticket.price}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TicketList;
