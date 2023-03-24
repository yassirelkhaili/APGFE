import React from 'react'
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
const Dashboard = () => {
  return (
    <div>
      <Form>
        <input className='myinput' required></input>
        <Button>Submit</Button>
      </Form>
      </div>
  )
}

export default Dashboard