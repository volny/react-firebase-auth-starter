import React from 'react'
import { Header } from 'semantic-ui-react'

import withAuthorization from 'HOC/withAuthorization'

const Application = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
    <Header as="h2">Application</Header>
  </div>
)

export default withAuthorization('user')(Application)
