import React from "react";

function SearchBar(props) {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle form submission logic here
  //   console.log("Form submitted");
  // };

  return (
    <div>
      <h1>SearchBar</h1>
      <form >
        <input type="text" placeholder="Enter your job keyword here" onChange={()=>props.handleSearchBar}/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
