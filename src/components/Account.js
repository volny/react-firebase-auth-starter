import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Header } from 'semantic-ui-react'

class Account extends Component {
  state = {
    password1: '',
    password2: '',
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
        <Header as="h2">Change Password</Header>
        <Form>
          <Form.Field>
            <label>Old Password</label>
            <input placeholder="**********" name="password1" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="**********" name="password2" onChange={this.handleChange} />
          </Form.Field>
          <Button onClick={this.handleSubmit}>Change Password</Button>
        </Form>
        <div style={{ paddingTop: 10 }}>
          <Link to="/reset-password">Forget your Password?</Link>
        </div>
      </div>
    )
  }
}

export default Account
