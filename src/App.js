import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'redux-zero/react';
import {Name} from './Name';
import {Me} from './Me';
import {Choose} from './Choose'

const App = ({personal, info, socials, repos}) => {
  return (
    <div>
          <Name name={personal.name} who={personal.who}/>
          <Me shortName={personal.shortName} who={personal.who} bio={personal.bio} photo={personal.photo} title="Esta es Luisa" />
          <Choose title='Why Choose Me?' />
    </div>
  );
}

const mapToProps = ({personal, info, socials, repos}) => ({personal, info, socials, repos});
export default connect (mapToProps)(App);
