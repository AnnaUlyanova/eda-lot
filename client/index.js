import React from 'react'
import ReactDOM from 'react-dom'
import {Router, IndexRoute, Route, hashHistory} from 'react-router'

import App from './components/App'
import Content from './components/Content'
import About from './components/About'
import DisplayItems from './components/DisplayItems'
import UserProfile from './components/UserProfile'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (<Router history = {hashHistory}>
      <Route path='/' component = { App }>
        <Route component = { Content }>
          <IndexRoute component = {About}/>
          <Route path='categories/:id' component = { DisplayItems }/>
          <Route path='users/:id' component = { UserProfile }/>
        </Route>
      </Route>
    </Router>
  ),

    document.getElementById('app')
  )
})
