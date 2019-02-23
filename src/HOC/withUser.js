import React from 'react'

import UserContext from 'context/UserContext'
import withFirebase from 'HOC/withFirebase'

export default Component =>
  withFirebase(
    class extends React.Component {
      state = {
        user: null,
      }

      componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(user => {
          user ? this.setState({ user }) : this.setState({ user: null })
        })
      }

      componentWillUnmount() {
        this.listener()
      }

      render() {
        return (
          <UserContext.Provider value={this.state.user}>
            <Component {...this.props} />
          </UserContext.Provider>
        )
      }
    }
  )
