import React, { Component } from 'react';
import {connect} from 'redux-zero/react';

import {Name} from './Components/Name';
import {Me} from './Components/Me';
import {Choose} from './Components/Choose';
import {Projects} from './Components/Projects';
import {Contact} from './Components/Contact';

const App = ({personal, info, socials, repos}) => {
  return (
    <div>
          <Name name={personal.name} who={personal.who}/>
          <Me shortName={personal.shortName} who={personal.who} bio={personal.bio} photo={personal.photo} title="Esta es Luisa" />
          <Choose title='Why Choose Me?' />
          <Projects title="Mi Trabajo"/>
          <Contact title="Contáctame"/>
    </div>
  );
}

const mapToProps = ({personal, info, socials, repos}) => ({personal, info, socials, repos});
export default connect (mapToProps)(App);
