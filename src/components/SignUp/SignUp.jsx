import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'

const SignUp = (props) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(false)
  const [passError, setPassError] = useState(false)

  const changeLogin = (e) => {
    setLogin(e.target.value)
  }

  const changePass = (e) => {
    setPassword(e.target.value)
  }

  const signedUp = () => {
    if (login === '' && password) {
      setLoginError(true)
      setTimeout(() => {
        setLoginError(false)
      }, 2000)
    } else if (login && password === '') {
      setPassError(true)
      setTimeout(() => {
        setPassError(false)
      }, 2000)
    } else if (login === '' && password === '') {
      setLoginError(true)
      setPassError(true)
      setTimeout(() => {
        setLoginError(false)
        setPassError(false)
      }, 2000)
    } else if (login && password) {
      setLoginError(true)
      setPassError(true)
      setTimeout(() => {
        setLoginError(false)
        setPassError(false)
      }, 2000)
      props.checkData(login, password)
      setLogin('')
      setPassword('')
    }
  }

  return (
    <div className="sign">
      <div className="sign__main">
        <div className="sign__input">
          <TextField
            id="loginBtn"
            variant="filled"
            type="text"
            label="Login"
            color="warning"
            autoComplete="off"
            sx={{ marginBottom: '30px' }}
            value={login}
            onChange={changeLogin}
            error={loginError}
          />

          <TextField
            id="passBtn"
            label="Password"
            variant="filled"
            type="password"
            color="warning"
            autoComplete="off"
            sx={{ marginBottom: '20px' }}
            value={password}
            onChange={changePass}
            error={passError}
          />
        </div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#6791f3',
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 700,
            margin: '10px',
          }}
          onClick={signedUp}
        >
          Sign In
        </Button>
        <Link to="/products">
          <Button
            variant="contained"
            sx={{
              marginTop: '10px',
              backgroundColor: '#6791f3',
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 700,
            }}
          >
            Back
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SignUp
