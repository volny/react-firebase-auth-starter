import React from 'react'
import FirebaseContext from 'context/FirebaseContext'

const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
)

export default withFirebase
