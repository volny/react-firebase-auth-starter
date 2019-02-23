import React, { Component } from 'react'
import { Button, Form, Header } from 'semantic-ui-react'

class ResetPassword extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  }

  handleChange = e => {
    this.setState(state => ({
      [e.target.name]: e.target.value,
    }))
  }

  handleSubmit = e => {
    e.preventDefault()

  }

  render() {
    return (
      <div style={{ padding: '20px 50px', maxWidth: 350 }}>
        <Header as='h2'>Reset Password</Header>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" name="email" type="text" onChange={this.handleChange} required />
          </Form.Field>
          <Button type="submit" onClick={this.handleSubmit}>Reset Password</Button>
          {this.state.error && <div style={{ paddingTop: 10, color: '#c0392b' }}> {this.state.error.message} </div>}
        </Form>
      </div>
    )
  }
}

export default ResetPassword
