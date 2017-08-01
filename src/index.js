import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'

import ApolloClient from './config/graphql'


ReactDOM.render((
  <ApolloProvider client={ApolloClient}>
    <App />
  </ApolloProvider>
), document.getElementById('root'))
registerServiceWorker()
