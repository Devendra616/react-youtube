import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// authentication required or not
function Protected({children, authentication = true}) {

  const authStatus = useSelector( (state) => state.auth.status);
  const navigate = useNavigate();
  const [loader, setLoader] = useState();

  useEffect(() => {
    if(authentication && !authStatus) {
      // user requires authenication and is not authenicated , 
      // eg not logged in and visiting all-post page
      navigate('/login')
    } else if(!authentication && authStatus) {
      // user dont req authentication and is authenicated
      // eg already logged in but visiting login or signup
      navigate('/')
    }
    setLoader(false)
  }, [authStatus,authentication, navigate])

  return (
     loader?null:<>{children}</>
  )
}

export default Protected