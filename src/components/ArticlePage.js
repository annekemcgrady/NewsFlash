import React from 'react';
import './ArticlePage.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


export const ArticlePage = (props) => {

const {title, author, category, description, id, url} = props
  
  return(
    <div className="article-page">
      <NavLink to={`/${category}`} className='back-btn'> ◀ Back To Headlines</NavLink>
      <h3>{title}</h3>
      <h5>{author}</h5>
      <div className='description'>Gist: {description}</div>
      <a target="_blank" href={url}>Link to Full Article </a>
      {/* <img src="" alt="gif" className='gif'/> */}
    </div>
  )

};


export default ArticlePage;