import React, { Component } from "react";
import "./App.css";
import HeadlineContainer from "../components/HeadlineContainer";
import ArticlePage from "../components/ArticlePage";
import Home from "../components/Home";
import Nav from "./Nav.js";
import NotFound from "../components/NotFound";
import { connect } from "react-redux";
import {
  fetchHeadlines,
  fetchCategoryHeadlines
} from "../apiCalls/apiCalls.js";
import { addHeadlines, addError } from "../actions";
import { Route, Switch } from "react-router";
import PropTypes from "prop-types";
import newspaper from "../images/newspaper.png";
import camera from "../images/camera.png";
import piggy from "../images/piggy-bank.png";
import flasks from "../images/flasks.png";
import trophy from "../images/trophy.png";
import stethoscope from "../images/stethoscope.png";

export class App extends Component {
  componentDidMount = async () => {
    let responseGeneral;
    let responseSports;
    let responseScience;
    let responseHealth;
    let responseBusiness;
    let responseEntertainment;

    try {
      responseGeneral = await fetchHeadlines();

      const cleanedGenArts = responseGeneral.articles.map((article, i) => {
        let genId = `gen-${i + 1}`;
        return {
          ...article,
          category: "general",
          id: genId,
          bookmarked: false,
          icon: newspaper
        };
      });
      responseSports = await fetchCategoryHeadlines("sports");
      const cleanedSportsArts = responseSports.articles.map((article, i) => {
        let sportsId = `sp-${i + 1}`;
        return {
          ...article,
          category: "sports",
          id: sportsId,
          bookmarked: false,
          icon: trophy
        };
      });

      responseScience = await fetchCategoryHeadlines("science");
      const cleanedSciArts = responseScience.articles.map((article, i) => {
        let scienceId = `sc-${i + 1}`;
        return {
          ...article,
          category: "science",
          id: scienceId,
          bookmarked: false,
          icon: flasks
        };
      });

      responseHealth = await fetchCategoryHeadlines("health");
      const cleanedHealthArts = responseHealth.articles.map((article, i) => {
        let healthId = `po-${i + 1}`;
        return {
          ...article,
          category: "health",
          id: healthId,
          bookmarked: false,
          icon: stethoscope
        };
      });

      responseBusiness = await fetchCategoryHeadlines("business");
      const cleanedBusArts = responseBusiness.articles.map((article, i) => {
        let businessId = `bu-${i + 1}`;
        return {
          ...article,
          category: "business",
          id: businessId,
          bookmarked: false,
          icon: piggy
        };
      });

      responseEntertainment = await fetchCategoryHeadlines("entertainment");
      const cleanedEntArts = responseEntertainment.articles.map(
        (article, i) => {
          let entertainmentId = `en-${i + 1}`;
          return {
            ...article,
            category: "entertainment",
            id: entertainmentId,
            bookmarked: false,
            icon: camera
          };
        }
      );

      const cleanedArticles = [
        ...cleanedGenArts,
        ...cleanedSportsArts,
        ...cleanedSciArts,
        ...cleanedHealthArts,
        ...cleanedBusArts,
        ...cleanedEntArts
      ];
      this.props.setHeadlines(cleanedArticles);
    } catch (error) {
      this.props.setError(error.message);
    }
  };

  filterArticles = category => {
    if (category !== "bookmarked") {
      return this.props.headlines.filter(item => item.category === category);
    } else {
      return this.props.articles.filter(item => item.bookmarked === true);
    }
  };

  render() {
    return (
      <div className="App">
        {this.props.error && <div>Sorry, we are having trouble loading...</div>}
        <Route path="/" component={Nav} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/general"
            render={() => (
              <HeadlineContainer data={this.filterArticles("general")} />
            )}
          />
          <Route
            exact
            path="/sports"
            render={() => (
              <HeadlineContainer data={this.filterArticles("sports")} />
            )}
          />
          <Route
            exact
            path="/science"
            render={() => (
              <HeadlineContainer data={this.filterArticles("science")} />
            )}
          />
          <Route
            exact
            path="/business"
            render={() => (
              <HeadlineContainer data={this.filterArticles("business")} />
            )}
          />
          <Route
            exact
            path="/health"
            render={() => (
              <HeadlineContainer data={this.filterArticles("health")} />
            )}
          />
          <Route
            exact
            path="/entertainment"
            render={() => (
              <HeadlineContainer data={this.filterArticles("entertainment")} />
            )}
          />
          <Route
            exact
            path="/:category/:id"
            render={({ match }) => {
              const foundArticle = this.props.headlines.find(
                article => article.id === match.params.id
              );
              return (
                foundArticle && (
                  <ArticlePage {...foundArticle} gif={this.props.gif} />
                )
              );
            }}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  headlines: state.headlines,
  error: state.error,
  gif: state.gif
});

export const mapDispatchToProps = dispatch => ({
  setHeadlines: headlines => dispatch(addHeadlines(headlines)),
  setError: errorMsg => dispatch(addError(errorMsg))
});

App.propTypes = {
  headlines: PropTypes.array,
  error: PropTypes.string,
  gif: PropTypes.string,
  setHeadlines: PropTypes.func,
  setError: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
