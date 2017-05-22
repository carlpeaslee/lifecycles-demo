import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
// import {logLifecycles} from './logger'
import {LoggerExample} from './logger'

// const LoggedApp = logLifecycles(App)
//
// ReactDOM.render(
//   <LoggedApp />,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

ReactDOM.render(
  <LoggerExample />,
  document.getElementById('root')
)
