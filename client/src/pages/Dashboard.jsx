import React from 'react'
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Dashboard = () => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>FirstName:</Form.Label>
          <Form.Control type="text" placeholder='Firstname' required/>
        </Form.Group>
        <Button type='Submit'>Submit</Button>
      </Form>
      </div>
  )
}

export default Dashboard