import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import 'semantic-ui-css/semantic.min.css'

import App from 'App'
import Firebase from 'scripts/firebase'
import FirebaseContext from 'context/FirebaseContext'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
