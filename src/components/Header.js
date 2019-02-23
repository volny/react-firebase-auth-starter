import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

/*
 * TODO
 * if logged in show 'Accout' and 'Logout' instead
 */

export default () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Header as='h2' style={{ padding: 20 }}>Auth Sample</Header>
    <div style={{ padding: 20 }}>
      <Link to="/login" style={{ padding: 20 }}>
        Login
      </Link>
      <Link to="/signup" style={{ padding: 20 }}>
        Signup
      </Link>
    </div>
  </div>
)
