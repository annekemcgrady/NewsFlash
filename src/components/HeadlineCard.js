import React from 'react';
import './HeadlineCard.css';
import { NavLink } from 'react-router-dom';

const HeadlineCard = ({ id, category, title, author, gist, source, url }) => {



  
  return(
    <div className='card'>
      <NavLink className="card-navlink" to={`/article/${id}`}>Read Full Article</NavLink>
      <h3 className='card-title'>{title}</h3>
      <h5 className='card-author'>{author}</h5>
      <p className='card-gist'>Gist: {gist}</p>
      <img src={url} alt='related to topic of headline' />
    </div>
  )

}


export default HeadlineCard;