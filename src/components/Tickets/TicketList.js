import React from "react";

function TicketList(props) {
  //if (!props.ticket) return "Loading";

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

// function EventDetails(props) {
//   if (!props.event) return "Loading";

//   return (
//     <div>
//       {props.event}
//       <ul>
//         {props.event.tickets.map(ticket => {
//           return (
//             <li key={ticket.id}>
//               {ticket.name} : {ticket.description}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

export default TicketList;
