import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

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
            <Route exact path="/" Component={LinkList} render={ () => <Redirect to='/new/1' /> } /> 
            <Route exact path="/login" Component={Login} />
            <Route exact path="/create" Component={CreateLink} />
            <Route exact path="/search" Component={Search} />
            <Route exact path="/top" Component={LinkList} />
            <Route exact path="/new/:page" Component={LinkList} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
