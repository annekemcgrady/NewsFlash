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
        <NavLink to='/main' className='nav-button'>Top Headlines</NavLink>
        <NavLink to='/business' className='nav-button'>Business</NavLink>
        <NavLink to='/health' className='nav-button'>Health</NavLink>
        <NavLink to='/science' className='nav-button'>Science</NavLink>
        <NavLink to='/entertainment' className='nav-button'>Entertainment</NavLink>
        <NavLink to='/sports' className='nav-button'>Sports</NavLink>
      </section>
    </div>
  );
}

}

export default Nav;