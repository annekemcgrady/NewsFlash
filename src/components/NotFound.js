import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';


const NotFound = () => {

  return (
    <div className="not-found">
      Error 404 ....Nobody's Home Here
      <Link to='/'>Go back to home page</Link>
    </div>
  )
}

export default NotFound;