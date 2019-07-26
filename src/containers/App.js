import React, { Component } from 'react';
import './App.css';
import HeadlineContainer from '../components/HeadlineContainer'
import Nav from './Nav.js'
import { connect } from 'react-redux';
import { fetchHeadlines, fetchCategoryHeadlines, fetchGIF } from '../apiCalls/apiCalls.js';
import { addHeadlines } from '../actions';


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
