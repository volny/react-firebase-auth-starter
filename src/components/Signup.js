import React, { Component } from 'react'
import { Button, Form, Header } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

import withFirebase from 'HOC/withFirebase'

const initialState = {
  name: '',
  email: '',
  password: '',
  error: '',
}

class Signup extends Component {
  state = initialState

  handleChange = e => {
    e.persist()
    this.setState(state => ({
      [e.target.name]: e.target.value,
    }))
  }

  handleSubmit = () => {
    // TODO save name in user obj
    const { name, email, password } = this.state
    this.props.firebase
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({ ...initialState })
        // TODO this should not be necessary - signup is a public-only route, so user should be redirected away automatically
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    return (
      <div style={{ padding: '20px 50px', maxWidth: 350 }}>
        <Header as="h2">Signup</Header>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input placeholder="Name" type="text" name="name" onChange={this.handleChange} required />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" type="text" name="email" onChange={this.handleChange} required />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="**********"
              type="password"
              name="password"
              onChange={this.handleChange}
              required
            />
          </Form.Field>
          <Button onClick={this.handleSubmit}>Signup</Button>
          {this.state.error && <div style={{ paddingTop: 10, color: '#c0392b' }}> {this.state.error} </div>}
        </Form>
      </div>
    )
  }
}

export default withRouter(withFirebase(Signup))
