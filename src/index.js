import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import currentTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import ApolloClient from './config/graphql'


import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()


ReactDOM.render((
  <ApolloProvider client={ApolloClient}>
    <MuiThemeProvider muiTheme={getMuiTheme(currentTheme)}>
      <App />
    </MuiThemeProvider>
  </ApolloProvider>
), document.getElementById('root'))
registerServiceWorker()
