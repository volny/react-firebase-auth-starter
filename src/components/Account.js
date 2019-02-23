import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Header } from 'semantic-ui-react'

import withFirebase from 'HOC/withFirebase'

const initialState = {
  currentPassword: '',
  newPassword: '',
  error: null,
  success: '',
}

class Account extends Component {
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
    e.preventDefault()
    const { currentPassword, newPassword } = this.state
    if (currentPassword.length > 0 && newPassword.length > 0) {

    this.props.firebase
      .updatePassword(currentPassword, newPassword, this.props.firebase.auth.currentUser.email)
      .then(() => {
        this.setState({
          ...initialState,
          success: 'Password successfully updated',
        });
      })
      .catch(error => {
        this.setState({ error });
      });

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
        <Header as="h2">Change Password</Header>
        <Form>
          <Form.Field>
            <label>Current Password</label>
            <input placeholder="**********" name="currentPassword" type="password" onChange={this.handleChange} value={this.state.currentPassword} />
          </Form.Field>
          <Form.Field>
            <label>New Password</label>
            <input placeholder="**********" name="newPassword" type="password" onChange={this.handleChange} value={this.state.newPassword} />
          </Form.Field>
          <Button type="submit" onClick={this.handleSubmit}>Change Password</Button>
          {this.state.error && (
            <div style={{ paddingTop: 10, color: '#c0392b' }}> {this.state.error.message} </div>
          )}
          {this.state.success && (
            <div style={{ paddingTop: 10, color: '#27ae60' }}> {this.state.success} </div>
          )}
        </Form>
        <div style={{ paddingTop: 10 }}>
          <Link to="/reset-password">Forget your Password?</Link>
        </div>
      </div>
    )
  }
}

export default withFirebase(Account)
