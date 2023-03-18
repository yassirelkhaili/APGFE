import React, {useEffect} from 'react'

const Dashboard = () => {
  useEffect (() => {
    localStorage.removeItem("auth")
    }, [])
  return (
    <div>Welcome to the dashboard</div>
  )
}

export default Dashboard