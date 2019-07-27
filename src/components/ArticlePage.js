import React from 'react';

const ArticlePage = ({title, author, id, source, content}) => {

  console.log(title)
  return(
    <div className="article-page">
      <h2>{title}</h2>
      <h5>{author}</h5>
      <h5>{source}</h5>
      <p>{content}</p>
      </div>
  )

}

export default ArticlePage;