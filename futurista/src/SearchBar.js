import React from "react";

function SearchBar() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div>
      <h1>SearchBar</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your job keyword here" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
