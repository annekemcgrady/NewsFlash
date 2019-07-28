import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';


const NotFound = () => {

  return (
    <div className="not-found">
      Error 404 Page Not Found
      <Link to='/'> Go to home page</Link>
    </div>
  )
}

export default NotFound;