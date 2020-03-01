import React from "react";

function EventForm(props) {
  const {
    handleChange,
    handleSubmit,
    values: { name, description, imageUrl, date }
  } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input onChange={handleChange} name="name" value={name} />
        <label>Description:</label>
        <input onChange={handleChange} name="description" value={description} />
        <label>Image:</label>
        <input onChange={handleChange} name="imageUrl" value={imageUrl}></input>
        <label>Date:</label>
        <input
          onChange={handleChange}
          name="date"
          type="date"
          min={"2020-02-25"}
          value={date}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default EventForm;
