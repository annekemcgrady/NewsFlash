import React from 'react';
import './HeadlineCard.css';
import { NavLink } from 'react-router-dom';

const HeadlineCard = ({ id, category, title, author, gist, url }) => {

  return(
    <div className='card'>
      <section className='card-header'>
      <NavLink className="card-navlink" to={`/${category}/${id}`}>Read Full Article</NavLink>
      {/* <img src={url} alt='related to topic of headline' /> */}
      </section>
      <section className='card-title'>
      <h2 className='card-title'>{title}</h2>
      <p className='card-author'>{author}</p>
      </section>
      <p className='card-gist'>Gist: {gist}</p>
      <p className='card-category'>{category}</p>
    </div>
  )

}


export default HeadlineCard;