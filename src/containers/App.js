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

      responsePolitics = await fetchCategoryHeadlines('politics')
      const cleanedPolArts = responsePolitics.articles.map((article,i) => {
        let politicsId= `po-${i+1}`
        return {...article, category: 'politics', id: politicsId, bookmarked: false }
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

      Promise.all([cleanedGenArts, cleanedSportsArts, cleanedSciArts, cleanedPolArts, cleanedBusArts, cleanedEntArts])
      const cleanedArticles = [...cleanedGenArts, ...cleanedSportsArts, ...cleanedSciArts, ...cleanedPolArts, ...cleanedBusArts, ...cleanedEntArts]
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
        <Route exact path='/science' render={() => <HeadlineContainer data={this.filterArticles('science')} />}/>
        <Route exact path='/business' render={() => <HeadlineContainer data={this.filterArticles('business')} />}/>
        <Route exact path='/politics' render={() => <HeadlineContainer data={this.filterArticles('politics')} />}/>
        <Route exact path='/entertainment' render={() => <HeadlineContainer data={this.filterArticles('entertainment')} />}/>
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
