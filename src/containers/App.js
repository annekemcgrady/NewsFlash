import React, { Component } from 'react';
import './App.css';
import HeadlineContainer from '../components/HeadlineContainer';
import ArticlePage from '../components/ArticlePage';
import Home from '../components/Home';
import Nav from './Nav.js';
import NotFound from '../components/NotFound';
import { connect } from 'react-redux';
import { fetchHeadlines, fetchCategoryHeadlines, fetchGIF } from '../apiCalls/apiCalls.js';
import { addHeadlines, addError } from '../actions';
import { Route } from 'react-router';


export class App extends Component {
  
  componentDidMount = async () => {
    let responseGeneral;
    let responseSports;
    let responseScience;
    let responseHealth;
    let responseBusiness;
    let responseEntertainment;

    try {
      responseGeneral = await fetchHeadlines()
      
      const cleanedGenArts = responseGeneral.articles.map((article, i) => {
        let genId= `gen-${i+1}`
        return {...article, category: 'general', id: genId, bookmarked: false }
      })
      responseSports = await fetchCategoryHeadlines('sports')
      const cleanedSportsArts = responseSports.articles.map((article,i) => {
        let sportsId= `sp-${i+1}`
        return {...article, category: 'sports', id: sportsId, bookmarked: false }
      })

      responseScience = await fetchCategoryHeadlines('science')
      const cleanedSciArts = responseScience.articles.map((article,i) => {
        let scienceId= `sc-${i+1}`
        return {...article, category: 'science', id: scienceId, bookmarked: false }
      })

      responseHealth = await fetchCategoryHeadlines('health')
      const cleanedHealthArts = responseHealth.articles.map((article,i) => {
        let healthId= `po-${i+1}`
        return {...article, category: 'health', id: healthId, bookmarked: false }
      })

      responseBusiness = await fetchCategoryHeadlines('business')
      const cleanedBusArts = responseBusiness.articles.map((article,i) => {
        let businessId= `bu-${i+1}`
        return {...article, category: 'business', id: businessId, bookmarked: false }
      })

      responseEntertainment = await fetchCategoryHeadlines('entertainment')
      const cleanedEntArts = responseEntertainment.articles.map((article,i) => {
        let entertainmentId= `en-${i+1}`
        return {...article, category: 'entertainment', id: entertainmentId, bookmarked: false }
      })

      Promise.all([cleanedGenArts, cleanedSportsArts, cleanedSciArts, cleanedHealthArts, cleanedBusArts, cleanedEntArts])
      const cleanedArticles = [...cleanedGenArts, ...cleanedSportsArts, ...cleanedSciArts, ...cleanedHealthArts, ...cleanedBusArts, ...cleanedEntArts]
      this.props.setHeadlines(cleanedArticles)
    } catch(error) {
      this.props.setError(error.message)
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
        { this.props.error  &&  <div>Sorry, we are having trouble loading...</div> }
        <Route path='/' component={ Nav} />
        <Route exact path= '/' component={ Home } />
        <Route exact path='/general' render={() => <HeadlineContainer data={this.filterArticles('general')} />} />
        <Route exact path='/sports' render={() => <HeadlineContainer data={this.filterArticles('sports')} />}/>
        <Route exact path='/science' render={() => <HeadlineContainer data={this.filterArticles('science')} />}/>
        <Route exact path='/business' render={() => <HeadlineContainer data={this.filterArticles('business')} />}/>
        <Route exact path='/health' render={() => <HeadlineContainer data={this.filterArticles('health')} />}/>
        <Route exact path='/entertainment' render={() => <HeadlineContainer data={this.filterArticles('entertainment')} />}/>
        <Route exact path='/:category/:id' render={({ match }) => {
          const { id } = match.params
          const foundArticle = this.props.headlines.find(article => article.id === match.params.id);
            return foundArticle && <ArticlePage {...foundArticle} />              
            }} /> 
        <Route path ='*' component={NotFound} />
      </div>
    );
  }

};

export const mapStateToProps = state => ({
  headlines: state.headlines
})

export const mapDispatchToProps = dispatch => ({
  setHeadlines: headlines => dispatch(addHeadlines(headlines)),
  setError: errorMsg => dispatch(addError(errorMsg))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
