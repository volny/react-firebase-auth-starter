import React, { Component } from 'react'
import { Button, Form, Header } from 'semantic-ui-react'

class Signup extends Component {
  state = {
    name: '',
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
        <Header as='h2'>Signup</Header>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input placeholder="Name" name="name" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" name="email" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="**********" name="password" onChange={this.handleChange} />
          </Form.Field>
          <Button onClick={this.handleSubmit}>Signup</Button>
        </Form>
      </div>
    )
  }
}

export default Signup

