import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Header } from 'semantic-ui-react'

class Account extends Component {
  state = {
    password1: '',
    password2: '',
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
        <Header as="h2">Change Password</Header>
        <Form>
          <Form.Field>
            <label>Old Password</label>
            <input placeholder="**********" name="password1" type="password" onChange={this.handleChange} required />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="**********" name="password2" type="password" onChange={this.handleChange} required />
          </Form.Field>
          <Button type="submit" onClick={this.handleSubmit}>Change Password</Button>
          {this.state.error && <div style={{ paddingTop: 10, color: '#c0392b' }}> {this.state.error.message} </div>}
        </Form>
        <div style={{ paddingTop: 10 }}>
          <Link to="/reset-password">Forget your Password?</Link>
        </div>
      </div>
    )
  }
}

export default Account
