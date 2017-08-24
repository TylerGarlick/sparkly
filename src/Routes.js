import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleAuthentication, logout } from './config/auth'
import { Home, NotFound } from './containers/common'
import ProductKind from './containers/ProductKind';
import Products from './containers/products';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/product-kinds" component={ProductKind} />

      <Route exact path="/search" component={Products} />

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