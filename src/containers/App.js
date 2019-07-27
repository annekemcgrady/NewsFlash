import React, { Component } from 'react';
import './App.css';
import HeadlineContainer from '../components/HeadlineContainer';
import ArticlePage from '../components/ArticlePage';
import Nav from './Nav.js'
import { connect } from 'react-redux';
import { fetchHeadlines, fetchCategoryHeadlines, fetchGIF } from '../apiCalls/apiCalls.js';
import { addHeadlines } from '../actions';
import { Route } from 'react-router';


export class App extends Component {
  
  componentDidMount = async () => {
    let responseGeneral;
    let responseSports;
    let responseScience;
    let responsePolitics;
    let responseEntertainment;

    try {
      responseGeneral = await fetchHeadlines()
      
      const cleanedGeneralArticles = responseGeneral.articles.map((article, i) => {
        let genId= `gen-${i+1}`
        return {...article, category: 'general', id: genId, bookmarked: false }
      })
      responseSports = await fetchCategoryHeadlines('sports')
      const cleanedSportsArticles = responseSports.articles.map((article,i) => {
        let sportsId= `sp-${i+1}`
        return {...article, category: 'sports', id: sportsId, bookmarked: false }
      })

      responseScience = await fetchCategoryHeadlines('science')
      const cleanedScienceArticles = responseScience.articles.map((article,i) => {
        let scienceId= `sc-${i+1}`
        return {...article, category: 'science', id: scienceId, bookmarked: false }
      })
      Promise.all([cleanedGeneralArticles, cleanedSportsArticles])
      const cleanedArticles = [...cleanedGeneralArticles, ...cleanedSportsArticles, ...cleanedScienceArticles]
      this.props.setHeadlines(cleanedArticles)
    } catch(error) {
      throw new Error("Error", error.message)
    }
  }

  filterArticles = (category) => {
    if (category !== 'bookmarked') {
      return this.props.headlines.filter(item => 
        item.category === category
        )
     } else {
      return this.props.articles.filter(item => 
        item.bookmarked === true
        )
     }
   }
    
  render() {
    
    return (
      <div className="App">
        <Route  path='/' component={Nav} />
        <Route exact path='/general' render={() => <HeadlineContainer data={this.filterArticles('general')} />} />
        <Route exact path='/sports' render={() => <HeadlineContainer data={this.filterArticles('sports')} />}/>
        <Route path='/article/:id' render={({ match }) => {
          const article = this.props.headlines.find(article => article.id === match.params.id);
              if (!article) {
                return (<div>This article is no longer available!</div>);  
              }
              return <ArticlePage match={match} {...article} />
              
            }} /> 
      </div>
    );
  }

};

export const mapStateToProps = state => ({
  headlines: state.headlines
})

export const mapDispatchToProps = dispatch => ({
  setHeadlines: headlines => dispatch(addHeadlines(headlines))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
