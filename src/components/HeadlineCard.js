import React from 'react';
import {connect} from 'react-redux';
import './HeadlineCard.css';
import { NavLink } from 'react-router-dom';


export const HeadlineCard = ({ id, icon, category, title, author, gist, url, bookmarked }) => {
  
  return(
    <div className='card'>
      <section className='card-header'>
      <NavLink className="card-navlink" to={`/${category}/${id}`}>See More</NavLink>
      </section>
      <section className='card-title'>
      <h2 className='card-title'>{title}</h2>
      <p className='card-author'>{author}</p>
      </section>
      {/* <p className='card-gist'>Gist: {gist}</p> */}
      <img className='card-category' src={icon} alt='category icon'/>
    </div>
  )

}


export default HeadlineCard;