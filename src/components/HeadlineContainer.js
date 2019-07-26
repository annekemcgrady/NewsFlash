import React from 'react';
import './HeadlineContainer.css';
import HeadlineCard from './HeadlineCard';

const HeadlineContainer = ({data}) => {

console.log(data)  
const articleDisplay = data.map(article => {
  
  return <HeadlineCard
          key = {article.publishedAt}
          id = {article.publishedAt}
          category = {article.category}
          title = {article.title}
          author = {article.author}
          gist = {article.description}
          source = {article.source.name}
          url = {article.urlToImage}
          />
})

  return(
    <div className='headline-container'>
      { articleDisplay }
    </div>
  )

}

export default HeadlineContainer;