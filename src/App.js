import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'redux-zero/react';
import {Name} from './Name'


const App = ({personal, info, socials, repos}) => {
  return (
    <Name name={personal.name}/>
  );
}

const mapToProps = ({personal, info, socials, repos}) => ({personal, info, socials, repos});
export default connect (mapToProps)(App);
