import React from 'react';
import './Home.css';

const Home = () => {

  return (
    <div className='home'>
      <p>Welcome to NewsFlash!</p>
      <p>Pick your poison and get informed on the go.</p>
      <img className='home-gif' src='https://media.giphy.com/media/39wBBqmsPOQVLf8paS/giphy.gif' alt='gif' />
      <p>Explore an article and you may get something to make you smile.</p>
      <div className='credits'>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </div>
  )
}


export default Home;