import React, { Component } from 'react'
import { Button, Form, Header } from 'semantic-ui-react'

import withFirebase from 'HOC/withFirebase'

const initialState = {
  name: '',
  email: '',
  password: '',
  error: null,
}

class Signup extends Component {
  state = initialState

  handleChange = e => {
    e.persist()
    this.setState(state => ({
      [e.target.name]: e.target.value,
      error: null,
    }))
  }

  handleSubmit = e => {
    // TODO save name in user obj
    const { name, email, password } = this.state
    if (name.length > 0 && email.length > 0 && password.length > 0) {
      this.props.firebase
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          this.setState({ ...initialState })
        })
        .catch(error => {
          this.setState({ error })
        })
    } else {
      this.setState({
        error: {
          message: 'Please fill out all fields',
        },
      })
    }
  }

  render() {
    return (
      <div style={{ padding: '20px 50px', maxWidth: 350 }}>
        <Header as="h2">Signup</Header>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input
              placeholder="Name"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              type="text"
              name="email"
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
          <Button onClick={this.handleSubmit}>Signup</Button>
          {this.state.error && (
            <div style={{ paddingTop: 10, color: '#c0392b' }}> {this.state.error.message} </div>
          )}
        </Form>
      </div>
    )
  }
}

export default withFirebase(Signup)
