import React, {useEffect} from 'react'

const Admin = () => { 
    useEffect (() => {
    localStorage.removeItem("auth")
    }, [])
  return (
    <div>Welcome Admin</div>
  )
}

export default Admin