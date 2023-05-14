import React, { useEffect, useState } from 'react'
import { GoogleLogin } from 'react-google-login'
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const clientId = "908559699410-r9n223pa37dahsb359kr91pge6qv4tjh.apps.googleusercontent.com"

const Login = () => {
  const location = useLocation();
    const [loggedIn, setLoggedIn] = useState(false);
    let email;
    let accessToken

  const onSuccess = (res) => {
    console.log("Login success", res.profileObj);
    email = res.profileObj.email

    axios.post('https://blockverseapi.brlakgec.com/login/', { email })
        .then(response => {
            console.log(response.data);
            console.log(response.data.token);
            accessToken =  response.data.token
            // localStorage.setItem('accessToken', accessToken)
            Cookies.set('accessToken', accessToken);

            if(response.data.message === "User not registered") {
              setLoggedIn(false)
              alert("You're not registered for the event. Please check your Login Mail!")
            } else {
              setLoggedIn(true)
            }
        })
        .catch(error => {
            console.error(error);
        });
  }
  const onFailure = (res) => {
    console.log("Login failed", res);
  }
  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn)
  }, [loggedIn]);

  if (loggedIn) {
    return (
      <Navigate
        to={{
          pathname: '/schema',
          // state: { accessToken: accessToken } 
          // state: accessToken
        }}
      />
    )
  }

  // const GoogleLogin = () => {
  //   return (
  //     <GoogleLogin
  //           clientId={clientId}    
  //           buttonText="Login"
  //           onSuccess={onSuccess}
  //           onFailure={onFailure}
  //           cookiePolicy={'single_host_origin'}
  //           isSignedIn={true}
  //     />
  //   )
  // }
  const CustomGoogleButton = ({ onClick }) => (
    <button onClick={onClick} className="custom-google-button px-6 py-2">
      LOGIN
    </button>
  );


  return (
    <section className=''>
        <article className='w-fit text-center p-10 mx-auto'>
            <div>
            <GoogleLogin
              clientId={clientId}    
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
              render={renderProps => (
                <CustomGoogleButton onClick={renderProps.onClick} />
              )}
            />
            </div>
        </article>
    </section>
  )
}

export default Login