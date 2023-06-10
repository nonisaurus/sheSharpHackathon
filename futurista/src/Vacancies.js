import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

class Vacancies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: "",
    };
  }

  handleSearchBar = (e) => {
    e.preventDefault();
    const userInput = e.target.value;
    this.setState({
      searchBar: userInput,
    });
  };

  render() {
    return (
      <div>
        <h1>Vacancies</h1>
        <SearchBar
          handleSearchBar={this.handleSearchBar}
          searchBar={this.state.searchBar}
        />
        <Filter />
      </div>
    );
  }
}

export default Vacancies;
