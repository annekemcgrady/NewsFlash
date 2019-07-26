import React, { Component } from 'react';
import './App.css';
import HeadlineContainer from '../components/HeadlineContainer'
import Nav from './Nav.js'
import { connect } from 'react-redux';
import { fetchHeadlines, fetchCategoryHeadlines, fetchGIF } from '../apiCalls/apiCalls.js'


export class App extends Component {
  
  componentDidMount = async () => {
    let response;

    try {
      response = await fetchHeadlines()

    } catch(error) {
      throw new Error('Error fetching headlines')
    }

  }
    
  render() {
    
    return (
      <div className="App">
        <Nav />
        <HeadlineContainer />
      </div>
    );
  }

};

export default App;
