import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
// import axios from "axios";


class Vacancies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: "",
      allJobs: [],
    };
  }
  apiCall = (value) => {
    const apiUrl = `sourcestack-api.com/jobs?${value}`;
    const secretKey = "SECRET_KEY";
    fetch(apiUrl, {
      headers: {
        "X-API-KEY": secretKey,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        this.setState({});
      })
      .catch((error) => {
        console.log("API call failed:", error);
      });
  };

  // componentDidMount() {
  //   axios
  //     .get("https://sourcestack-api.com/jobs")
  //     .then((response) => {
  //       const allJobsData = response.data;
  //       this.setState({ allJobs: allJobsData });
  //     })
  //     .catch((error) => {
  //       console.log("Error in componentDidMount:", error);
  //     });
  // }

  handleSearchBar = (e) => {
    e.preventDefault();
    const userInput = e.target.value;
    this.setState({
      searchBar: userInput,
    });
  };


  render() {
    const displayAllJobs = this.state.allJobs.map((item, index) => {
      return <h1>Hi</h1>;
    });
    return (


      <div>
        <h1>Vacancies</h1>
        <SearchBar
          handleSearchBar={this.handleSearchBar}
          searchBar={this.state.searchBar}
        />
        <Filter />
        {displayAllJobs}
      </div>
    );
  }
}

export default Vacancies;
