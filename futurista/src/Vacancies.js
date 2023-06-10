import React, { Component } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

import Apply from "./Apply";
// import jobsData from "./seed";


class Vacancies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allJobs: [],
      indexNumber: null
    };
  }
  
  componentDidMount() {
    this.ApiCall()
  }

  ApiCall() {
    const url = 'https://148581a8-8e6e-4837-a77e-d8733cf62e83.mock.pstmn.io/jobs';
    const secretKey = process.env.SECRET_KEY
    return axios
    .post(url, {
      headers: {
        "Access-Control-Allow-Origin": "https://sourcestack.co",
        "Content-Type": "application/json",
        "x-api-key": secretKey
      },
    })
    .then((response) => {
      const responseJobs = response.data.data
      const randomNumber= Math.floor(Math.random() * responseJobs.length)
      const filteredResponse = responseJobs.filter((jobs, index) => {
            return index < 1;
          });
      this.setState({
        allJobs: responseJobs,
        indexNumber: randomNumber
      })
      console.log('this>>', this.state.allJobs)
    })
    .catch(function (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      })}
  
    handleSkipToNext = () => {
      const { allJobs, indexNumber } = this.state;
      const totalJobs = allJobs.length;
      const nextIndex = (indexNumber + 1) % totalJobs;
      this.setState({
        indexNumber: nextIndex
      });
    }
      


  render() {
    if(this.state.indexNumber === null){
      return <h1>loading....</h1>
    } 
    const item = this.state.allJobs[this.state.indexNumber]
    return(
      <>
        <Table>
          <thead>
            <tr>
              <th>
                {item.job_name}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hours:</td>
              <td>{item.hours}</td>
            </tr>
            <tr>
              <td>Seniority:</td>
              <td>{item.seniority}</td>
            </tr>
            <tr>
              <td>Company Name:</td>
              <td>{item.company_name}</td>
            </tr>
            <tr>
              <td>Job Location:</td>
              <td>{item.job_location}</td>
            </tr>
            <tr>
              <td>Posted:</td>
              <td>{item.last_indexed}</td>
            </tr>
          </tbody>
        </Table> 
        <Apply companyUrl={item.company_url} apiCall={this.ApiCall}/>
        <button onClick={this.handleSkipToNext}>Skip to Next</button>
      </>
    )
   
  }
}

export default Vacancies;
