import app from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
  }

  createUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  signInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)

  logout = () => {
    return this.auth.signOut()
  }

  // TODO redirect back to own reset pw form
  // https://firebase.google.com/docs/auth/web/passing-state-in-email-actions
  resetPassword = email => this.auth.sendPasswordResetEmail(email)

  updatePassword = (currentPassword, newPassword, email) =>
    // TODO this should probably be `reauthenticateAndRetrieveDataWithCredential` instead
    // https://firebase.google.com/docs/auth/web/manage-users#re-authenticate_a_user
    this.auth.signInWithEmailAndPassword(email, currentPassword).then(() => {
      this.auth.currentUser.updatePassword(newPassword)
    })
}

export default Firebase
