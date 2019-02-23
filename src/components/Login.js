import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Header } from 'semantic-ui-react'

import withFirebase from 'HOC/withFirebase'

const initialState = {
  email: '',
  password: '',
  error: null,
}

class Login extends Component {
  state = initialState

  handleChange = e => {
    e.persist()
    this.setState(state => ({
      [e.target.name]: e.target.value,
      error: null,
    }))
  }

  handleSubmit = e => {
    const { email, password } = this.state

    if (email.length > 0 && password.length > 0) {
      this.props.firebase
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ ...initialState })
        })
        .catch(error => {
          this.setState({ error })
        })
    } else {
      this.setState({
        error: {
          message: 'Please fill out both fields',
        },
      })
    }
  }

  render() {
    return (
      <div style={{ padding: '20px 50px', maxWidth: 350 }}>
        <Header as="h2">Login</Header>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              name="email"
              type="text"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="**********"
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Field>
          <Button onClick={this.handleSubmit}>Login</Button>
          {this.state.error && (
            <div style={{ paddingTop: 10, color: '#c0392b' }}> {this.state.error.message} </div>
          )}
        </Form>
        <div style={{ paddingTop: 10 }}>
          <Link to="/reset-password">Forgot your Password?</Link>
        </div>
      </div>
    )
  }
}

export default withFirebase(Login)
