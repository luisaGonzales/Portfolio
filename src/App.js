import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'redux-zero/react';
import {Name} from './Name';
import {Me} from './Me';

const App = ({personal, info, socials, repos}) => {
  return (
    <div>
          <Name name={personal.name} who={personal.who}/>
          <Me shortName={personal.shortName} who={personal.who} bio={personal.bio} photo={personal.photo} />
    </div>
  );
}

const mapToProps = ({personal, info, socials, repos}) => ({personal, info, socials, repos});
export default connect (mapToProps)(App);
