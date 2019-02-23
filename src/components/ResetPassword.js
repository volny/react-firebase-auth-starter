import React, { Component } from 'react'
import { Button, Form, Header } from 'semantic-ui-react'

class ResetPassword extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = e => {
    this.setState(state => ({
      [e.target.name]: e.target.value,
    }))
  }

  handleSubmit = () => {}

  render() {
    return (
      <div style={{ padding: '20px 50px', maxWidth: 350 }}>
        <Header as='h2'>Reset Password</Header>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" name="email" onChange={this.handleChange} />
          </Form.Field>
          <Button onClick={this.handleSubmit}>Reset Password</Button>
        </Form>
      </div>
    )
  }
}

export default ResetPassword
