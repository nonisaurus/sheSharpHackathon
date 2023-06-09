import React, {Component} from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

class Vacancies extends Component{
    constructor(props){
        super(props)
    }

    render(){
         return (
      <div>
        <h1>Vacancies</h1>
        <SearchBar />
        <Filter />
      </div>
    );
    }
  }
  
  export default Vacancies;