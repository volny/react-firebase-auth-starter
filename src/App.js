import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import withAuthentication from 'HOC/withAuthentication'

import Header from 'components//Header'
import Landing from 'components/Landing'
import Signup from 'components/Signup'
import Login from 'components/Login'
import ResetPassword from 'components/ResetPassword'
import Application from 'components/Application'
import Account from 'components/Account'

const App = () => (
  <Router>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, width: '100vw' }}>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/app" component={Application} />
        <Route path="/account" component={Account} />
      </main>
    </div>
  </Router>
)

export default withAuthentication(App)
