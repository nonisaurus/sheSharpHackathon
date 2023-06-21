import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Table from 'react-bootstrap/Table';
import Apply from "./Apply";
import { Container } from "react-bootstrap";

class Vacancies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allJobs: [],
      indexNumber: null,
      showApply: false
    };
  }
  
  componentDidMount() {
    this.ApiCall()
  }

  ApiCall() {
    const url = 'https://148581a8-8e6e-4837-a77e-d8733cf62e83.mock.pstmn.io/jobs';
    const secretKey = process.env.SECRET_KEY
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "https://sourcestack.co",
        "Content-Type": "application/json",
        "x-api-key": secretKey
      },
    };
    
    return axios
    .post(url, config)
    .then((response) => {
      const responseJobs = response.data.data
      const randomNumber= Math.floor(Math.random() * responseJobs.length)

      this.setState({
        allJobs: responseJobs,
        indexNumber: randomNumber
      })
    })
    .catch(function (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      })}
  
  handleSkipToNext = () => {
    const { allJobs, indexNumber } = this.state;
    const totalJobs = allJobs.length;
    // This line calculates the index of the next job to display. It adds 1 to the current indexNumber and takes the modulus (%) of totalJobs to ensure that the index wraps around to 0 if it exceeds the range of available jobs.
    const nextIndex = (indexNumber + 1) % totalJobs;

    this.setState({
      indexNumber: nextIndex
    });
  }

  handlePrev = () => {
    const { allJobs, indexNumber } = this.state;
    const totalJobs = allJobs.length;
    const prevIndex = (indexNumber - 1 + totalJobs) % totalJobs;

    this.setState({
      indexNumber: prevIndex
    });
  }

  handleShowApply = () => {
    this.setState({ showApply: true });
  };

  handleCloseApply = () => {
    this.setState({ showApply: false });
  };


  render() {
    if(this.state.indexNumber === null){
      return <h1 className="flex-center">loading....</h1>
    } 

    const item = this.state.allJobs[this.state.indexNumber]

    return(
      <Container>
        <Table className="table-borderless">
          <thead>
            <tr>
              <th className="text-center" colspan="2">
                {item.job_name}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hours:</td>
              <td>{item.hours || "unknown"}</td>
            </tr>
            <tr>
              <td>Seniority:</td>
              <td>{item.seniority || "unknown"}</td>
            </tr>
            <tr>
              <td>Company Name:</td>
              <td>{item.company_name || "unknown"}</td>
            </tr>
            <tr>
              <td>Job Location:</td>
              <td>{item.job_location || "unknown"}</td>
            </tr>
            <tr>
              <td>Posted:</td>
              <td>{item.last_indexed ? new Date(item.last_indexed).toLocaleString() : "unknown"}</td>
            </tr>
          </tbody>
        </Table> 

        <Container className="flex-center">
          <button className="job-btn prev-btn" onClick={this.handlePrev} >Previous</button>
          <button className="job-btn apply-btn" onClick={this.handleShowApply}>Apply</button>
          <button className="job-btn skip-btn" onClick={this.handleSkipToNext}>Skip</button>
        </Container>

        {this.state.showApply && (
          <Apply companyUrl={item.company_url} 
          apiCall={this.ApiCall} 
          handleClose={this.handleCloseApply}
          show={this.state.showApply} />
        )}
      </Container>
    )
   
  }
}

export default Vacancies;
