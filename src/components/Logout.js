import React, { useState } from 'react'
import { GoogleLogout } from 'react-google-login' 
import { Navigate } from 'react-router-dom';

const clientId = "908559699410-r9n223pa37dahsb359kr91pge6qv4tjh.apps.googleusercontent.com"

const Logout = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const onSuccess = () => {
    console.log("Logged Out");
    setLoggedOut(true)
  }

    if (loggedOut) {
        return <Navigate to="/" />;
    }
  return (
    <div>
        <GoogleLogout
            clientId={clientId}
            buttonText={'Log out'}
            onLogoutSuccess={onSuccess}
        />
    </div>
  )
}

export default Logout