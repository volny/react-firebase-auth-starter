import React from 'react'
import { withRouter } from 'react-router-dom'

import withFirebase from 'HOC/withFirebase'

// type visibleTo = 'public' | 'user' | 'admin'
const withAuthorization = visibleTo => Component =>
  withFirebase(
    withRouter(
      class extends React.Component {
        state = {
          visible: false,
        }

        componentDidMount() {
          this.listener = this.props.firebase.auth.onAuthStateChanged(user => {
            this.handleProtection(visibleTo, user)
          })
        }

        componentWillUnmount() {
          this.listener()
        }

        handleProtection = (visibility, user) => {
          switch (visibility) {
            case 'public':
              user
                ? this.props.history.push('/app')
                : this.setState({ visible: true })
              break
            case 'user':
              user
                ? this.setState({ visible: true })
                : this.props.history.push('/login')
              break
            case 'admin':
              // TODO
              this.setState({ visible: false })
              break
            default:
              console.error(`Unrecognized route protection ${visibleTo}`)
              this.setState({ visible: false })
          }
        }

        render() {
          return this.state.visible ? <Component {...this.props} /> : null
        }
      }
    )
  )

export default withAuthorization
