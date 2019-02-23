import React, { Component } from 'react'
import { Button, Form, Header } from 'semantic-ui-react'

import withFirebase from 'HOC/withFirebase'

const initialState = {
  email: '',
  error: null,
  success: '',
}

class ResetPassword extends Component {
  state = initialState

  handleChange = e => {
    e.persist()
    this.setState(state => ({
      [e.target.name]: e.target.value,
      error: null,
      success: '',
    }))
  }

  handleSubmit = e => {
    if (this.state.email.length > 0) {
      this.props.firebase
        .resetPassword(this.state.email)
        .then(() => {
          this.setState({
            ...initialState,
            success: 'A reset link has been sent to your email address',
          })
        })
        .catch(error => {
          this.setState({ error })
        })
    } else {
      this.setState({
        ...initialState,
        error: {
          message: 'Please fill out the field',
        },
      })
    }
  }

  render() {
    return (
      <div style={{ padding: '20px 50px', maxWidth: 350 }}>
        <Header as="h2">Reset Password</Header>
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
          <Button onClick={this.handleSubmit}>Reset Password</Button>
          {this.state.error && (
            <div style={{ paddingTop: 10, color: '#c0392b' }}> {this.state.error.message} </div>
          )}
          {this.state.success && (
            <div style={{ paddingTop: 10, color: '#27ae60' }}> {this.state.success} </div>
          )}
        </Form>
      </div>
    )
  }
}

export default withFirebase(ResetPassword)
