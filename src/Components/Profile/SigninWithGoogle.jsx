import React from 'react'
import { useState } from 'react';
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom';

function SigninWithGoogle() {
  const [isAuth, setIsAuth] = useState(false)
  const navigate=useNavigate()
  let googleSuccess = (response) => {
    console.log(response);
    console.log(response.profileObj)
  localStorage.setItem('name',response.profileObj.givenName)
    setIsAuth(true)
    alert(`Welcome ${response.profileObj.givenName} , Happy Shopping`)
   navigate('/')
  }
  let googleFailure = (response) => {
    console.log(response);    }
  return (
    <GoogleLogin
      clientId='62223785118-7ehbulfopl0d7hb1qr67vr4r7fr934qf.apps.googleusercontent.com'
      buttonText='Login With Google'
      render={renderProps => (
        <button style={{marginTop:'-20px'}} onClick={renderProps.onClick} disabled={renderProps.disabled}>Login With Google</button>
      )}
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy="single_host_origin"
      />
  )
}

export default SigninWithGoogle
