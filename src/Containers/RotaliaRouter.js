import React, { Component, PropTypes } from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './App'
import About from '../Components/About'
import BoardOfDirectors from '../Components/BoardOfDirectors'
import History from '../Containers/History'
import News from '../Components/News'
import Recipients from '../Components/Recipients'
import SelectionCommittee from '../Components/SelectionCommittee'
import Contact from '../Containers/Contact'
import MartKask from '../Components/MartKask'
import ValdekParik from '../Components/ValdekParik'
import VahoRebassoo from '../Components/VahoRebassoo'
import TiinaOviir from '../Components/TiinaOviir'
import KalevSepp from '../Components/KalevSepp'

export default class GoFlyRouter extends Component {
  render() {
    return (
      <Router key={Math.random()} history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={News} />
          <Route path="/news" component={News} />
          <Route path="/about" component={About} />
          <Route path="/board" component={BoardOfDirectors} />
          <Route path="/Mart-Kask" component={MartKask} />
          <Route path="/Tiina-Oviir" component={TiinaOviir} />
          <Route path="/Kalev-Sepp" component={KalevSepp} />
          <Route path="/Valdek-Parik" component={ValdekParik} />
          <Route path="/Vaho-Rebassoo" component={VahoRebassoo} />


          <Route path="/history" component={History} />
          <Route path="/recipients" component={Recipients} />
          <Route path="/selection" component={SelectionCommittee} />
          <Route path="/contact" component={Contact} />

        </Route>
      </Router>
    )
  }
}
