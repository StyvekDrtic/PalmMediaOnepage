import React from 'react';
import { navigate } from 'gatsby'

const NotFound = () => {
  navigate('/');
  return (<p>404 - sorry jako</p>);
}

export default NotFound;
