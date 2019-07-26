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
    let response;

    try {
      response = await fetchHeadlines()
      const cleanedArticles = response.articles.map(article => {
        return {...article, category: 'general'}
      })
      this.props.setHeadlines(cleanedArticles)
    } catch(error) {
      throw new Error('Error fetching headlines')
    }

  }
    
  render() {
    
    return (
      <div className="App">
        <Nav />
        <HeadlineContainer data={this.props.headlines} />
        <Route path="/" component={App} />
        <Route exact path="/main" component={App} />
        <Route path='/article/:id' render={({ match }) => {
        const article = this.props.headlines.find(article => article.id === parseInt(match.params.id));
  
            if (!article) {
              return (<div>This article is no longer available! </div>);  
            }
            return <ArticlePage match={match} {...article} />
            
          }} /> */}
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
