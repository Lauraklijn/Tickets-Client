import React from "react";

function TicketForm(props) {
  const {
    handleChange,
    handleSubmit,
    values: { name, author, description, image, price }
  } = props;

  return (
    <div className="mt-5">
      <h3> Create ticket </h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input onChange={handleChange} name="name" value={name} />
        <label>Author:</label>
        <input onChange={handleChange} name="author" value={author} />

        <label>Description:</label>
        <input onChange={handleChange} name="description" value={description} />
        <label>Image:</label>
        <input onChange={handleChange} name="image" value={image}></input>
        <label>Price:</label>
        <input onChange={handleChange} name="price" value={price}></input>
        <input type="submit" />
      </form>
    </div>
  );
}

export default TicketForm;
