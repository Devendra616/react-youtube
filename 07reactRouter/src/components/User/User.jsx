import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()

  return (
    <div className='bg-orange-600 text-center text-2xl text-white py-2'>User : {userid}</div>
  )
}

export default User