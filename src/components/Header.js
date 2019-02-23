import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

import withFirebase from 'HOC/withFirebase'
import withUser from 'HOC/withUser'

const PrivateItems = ({ firebase }) => (
  <>
    <Link to="/account" style={{ padding: 20 }}>
      Account
    </Link>
    <span style={{ padding: 20, color: '#4183c4', cursor: 'pointer' }} onClick={firebase.logout}>
      Logout
    </span>
  </>
)

const PublicItems = () => (
  <>
    <Link to="/login" style={{ padding: 20 }}>
      Login
    </Link>

    <Link to="/signup" style={{ padding: 20 }}>
      Signup
    </Link>
  </>
)

const Nav = ({ firebase, user }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Link to={!!user ? 'app' : '/'}>
      <Header as="h2" style={{ padding: 20 }}>
        Auth Sample
      </Header>
    </Link>
    <div style={{ padding: 20 }}>{user ? <PrivateItems firebase={firebase} /> : <PublicItems />}</div>
  </div>
)

export default withUser(withFirebase(Nav))
