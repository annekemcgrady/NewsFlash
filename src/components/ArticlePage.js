import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


export const ArticlePage = (props) => {

console.log(props.id)


const {title, author, source, category, content, id} = props
  
  return(
    <div className="article-page">
    <NavLink to={`/${category}`} className='back-btn'> ◀ Go Back</NavLink>
      <h2>{id}</h2>
      <h2>Title: {title}</h2>
      <h5>Author: {author}</h5>
      <h5>Source: {source.title}</h5>
      <p>{content}</p>
      </div>
  )

};


export default ArticlePage;