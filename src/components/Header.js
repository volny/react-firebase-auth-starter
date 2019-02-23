import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

import withFirebase from 'HOC/withFirebase'
// TODO shouldn't this be wrapped in the HOC rather than using the context directly?
// import withUser from 'HOC/withUser'
import UserContext from 'context/UserContext'

/*
 * TODO
 * if logged in show 'Accout' and 'Logout' instead
 */

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

const Nav = ({ firebase }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <UserContext.Consumer>
      {user => (
        <>
          <Header as="h2" style={{ padding: 20 }}>
            Auth Sample
          </Header>
          <div style={{ padding: 20 }}>{user ? <PrivateItems firebase={firebase} /> : <PublicItems />}</div>
        </>
      )}
    </UserContext.Consumer>
  </div>
)

export default withFirebase(Nav)
