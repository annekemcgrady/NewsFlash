import React, { Component } from 'react';
import './App.css';
import HeadlineContainer from '../components/HeadlineContainer'
import Nav from './Nav.js'
import { connect } from 'react-redux';


export class App extends Component {
  
componentDidMount=()=>{

  }
  
  render =()=> {
  
  return (
    <div className="App">
      <Nav />
      <HeadlineContainer />
    </div>
  );
}

}

export default App;
