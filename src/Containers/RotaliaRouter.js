import React, { Component, PropTypes } from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './App'
import Home from '../Components/Home'
import BoardOfDirectors from '../Components/BoardOfDirectors'
import News from '../Components/News'
import Recipients from '../Components/Recipients'
import SelectionCommittee from '../Components/SelectionCommittee'
import Contact from '../Components/Contact'
import MartKask from '../Components/MartKask'
import ValdekParik from '../Components/ValdekParik'
import VahoRebassoo from '../Components/VahoRebassoo'
import TiinaOviir from '../Components/TiinaOviir'
import KalevSepp from '../Components/KalevSepp'
import Bylaws from '../Components/Bylaws'
import Trust from '../Components/Trust'
import Incorporation from '../Components/Incorporation'

export default class GoFlyRouter extends Component {
  render() {
    return (
      <Router key={Math.random()} history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
          <Route path="/news" component={News} />
          <Route path="/home" component={Home} />
          <Route path="/board" component={BoardOfDirectors} />
          <Route path="/Mart-Kask" component={MartKask} />
          <Route path="/Tiina-Oviir" component={TiinaOviir} />
          <Route path="/Kalev-Sepp" component={KalevSepp} />
          <Route path="/Valdek-Parik" component={ValdekParik} />
          <Route path="/Vaho-Rebassoo" component={VahoRebassoo} />
          <Route path="/recipients" component={Recipients} />
          <Route path="/selection" component={SelectionCommittee} />
          <Route path="/bylaws" component={Bylaws} />
          <Route path="/contact" component={Contact} />
          <Route path="/trust" component={Trust} />
          <Route path="/incorporation" component={Incorporation} />
        </Route>
      </Router>
    )
  }
}
