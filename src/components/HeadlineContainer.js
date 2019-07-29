import React from 'react';
import './HeadlineContainer.css';
import  HeadlineCard  from '../containers/HeadlineCard';

const HeadlineContainer = ({data}) => {

  const articleDisplay = data.map(article => {

  return <HeadlineCard
          key = {article.id}
          id={article.id}
          category={article.category}
          icon = {article.icon}
          title = {article.title}
          author = {article.author}
          gist = {article.description}
          source = {article.source.name}
          url = {article.url}
          />
})

  return(
    <div className='headline-container'>
      { articleDisplay }
    </div>
  )

}

export default HeadlineContainer;