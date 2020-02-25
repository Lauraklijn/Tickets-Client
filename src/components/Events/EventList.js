import React from "react";

export default function EventList(props) {
  //if (!props.events) return "Loading";

  return (
    <div>
      {props.events.map(event => {
        return <li key={event.id}> {event.name}</li>;
      })}
    </div>
  );
}
