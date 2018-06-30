import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import LinkList from './LinkList'
import CreateLink from './CreateLink'
import Header from './Header'
import Login from './Login'
import Search from './Search'

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" Component={LinkList} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/create" Component={CreateLink} />
            <Route exact path="/search" Component={Search} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
