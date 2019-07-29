import React, { Component } from 'react';
import {connect} from 'react-redux';
import './HeadlineCard.css';
import { NavLink } from 'react-router-dom';
import { fetchGIF } from '../apiCalls/apiCalls.js';
import { addGIF, addError} from '../actions';
import PropTypes from 'prop-types'; 


export class HeadlineCard extends Component {
  
componentDidMount = async () => {
  try {
    const gif = await fetchGIF(this.props.category)
    this.props.setGIF(gif.data[0].images.downsized.url)
  } catch(error) {
    this.props.setError(error.message)
  }
}

render() {

  const { id, icon, category, title} = this.props

  return(

    <div className='card'>
      <section className='card-header'>
      <NavLink className="card-navlink" to={`/${category}/${id}`}>See More</NavLink>
      </section>
      <section className='card-title'>
      <h2 className='card-title'>{title}</h2>
      </section>
      <img className='card-category' src={icon} alt='category icon'/>
    </div> 
  )
  }
}

export const mapDispatchToProps = dispatch => ({
  setGIF: gifURL => dispatch(addGIF(gifURL)),
  setError: errorMsg => dispatch(addError(errorMsg))
})


HeadlineCard.propTypes = {
  id: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  setGIF: PropTypes.func,
  setERror: PropTypes.func
}

export default connect(null, mapDispatchToProps)(HeadlineCard);


