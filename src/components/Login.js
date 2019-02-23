import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Header } from 'semantic-ui-react'

class Login extends Component {
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
        <Header as="h2">Login</Header>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" name="email" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="**********" name="password" onChange={this.handleChange} />
          </Form.Field>
          <Button onClick={this.handleSubmit}>Login</Button>
        </Form>
        <div style={{ paddingTop: 10 }}>
          <Link to="/reset-password">Forget your Password?</Link>
        </div>
      </div>
    )
  }
}

export default Login
