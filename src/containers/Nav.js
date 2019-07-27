import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';

export class Nav extends Component {
  
componentDidMount() {

  }
  
render() {
  
  return (
    <div className="Nav">
      <h1>NewsFlash</h1>
      <section className="button-container">
        <NavLink to='/general' className='nav-button'>Top Headlines</NavLink>
        <NavLink to='/politics' className='nav-button'>Politics</NavLink>
        <NavLink to='/science' className='nav-button'>Science</NavLink>
        <NavLink to='/money' className='nav-button'>Money</NavLink>
        <NavLink to='/entertainment' className='nav-button'>Entertainment</NavLink>
        <NavLink to='/sports' className='nav-button'>Sports</NavLink>
      </section>
    </div>
  );
}

}

export default Nav;