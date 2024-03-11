import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  // get data fron UserContext
  const {user} = useContext(UserContext)

  if(!user)
    return <h2>Not Logged In</h2>

  return (
    <div>
        <h2>Profile : {user.username}</h2>
    </div>
  )
}

export default Profile