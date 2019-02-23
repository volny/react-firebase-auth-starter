import React from 'react'
import UserContext from 'context/UserContext'

const withUser = Component => props => (
  <UserContext.Consumer>
    {user => (user === null ? null : <Component {...props} user={user} />)}
  </UserContext.Consumer>
)

export default withUser
