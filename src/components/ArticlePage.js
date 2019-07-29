import React from 'react';
import './ArticlePage.css';
import { NavLink } from 'react-router-dom';

export const ArticlePage = (props) => {

const {title, author, category, description, url, gif} = props
  
  return(
    <div className="article-page">
      <NavLink to={`/${category}`} className='back-btn'> ◀ Back To Headlines</NavLink>
      <h3>{title}</h3>
      <h5>{author}</h5>
      <div className='description'>Gist: {description}</div>
      <img src={gif} alt="gif" className='gif'/>
      <a target="_blank" rel="noopener noreferrer" href={url} className="art-link">Link to Full Article </a>
      
    </div>
  )
};


export default ArticlePage;