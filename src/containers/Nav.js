import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import newspaper from '../images/newspaper.png';
import camera from '../images/camera.png';
import piggy from '../images/piggy-bank.png';
import flasks from '../images/flasks.png';
import trophy from '../images/trophy.png';
import stethoscope from '../images/stethoscope.png';
import house from '../images/home.png';
// import { connect } from 'react-redux';

export class Nav extends Component {
  
componentDidMount() {

  }
  
render() {
  
  return (
    <div className="Nav">
      <section className='logo'>
      <h1 className='title-news'>News</h1>
      <h1 className='title-flash'>Flash</h1>
      </section>
      <section className="button-container">
        <NavLink to='/general' className='nav-button'><img src={newspaper} alt='newspaper' /><br/>Top Headlines</NavLink>
        <NavLink to='/business' className='nav-button'><img src={piggy}  alt='piggy bank'/><br/>Business</NavLink>
        <NavLink to='/health' className='nav-button'><img src={stethoscope} alt='stethoscope' /><br/>Health</NavLink>
        <NavLink to='/science' className='nav-button'><img src={flasks} alt='beakers'/> <br/>Science</NavLink>
        <NavLink to='/entertainment' className='nav-button'><img src={camera} alt='camera'/><br/>Entertainment</NavLink>
        <NavLink to='/sports' className='nav-button'><img src={trophy} alt='trophy'/><br/>Sports</NavLink>
        <NavLink to='/' className='nav-button'><img src={house} alt='home'/><br/>Home</NavLink>
      </section>
    </div>
  );
}

}

export default Nav;