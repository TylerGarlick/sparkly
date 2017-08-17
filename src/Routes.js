import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleAuthentication, logout } from './config/auth'
import { Home, NotFound } from './containers/common'


export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/logout" component={() => {
        logout()
        window.location = '/'
        return null
      }} />

      <Route exact path="/callback" component={(props) => {
        handleAuthentication(props)
        window.location = '/'
        return null
      }} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)