import React from 'react'
import { useGlobalContext } from '../../utils/context';
import { Box, Typography } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import Login from '../../components/login';
import Signup from '../../components/signup';

const useStyles = makeStyles((theme) => ({
  box1: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    height: '60vh',
    marginTop: '10%',
    // gap: '1rem',
    backgroundColor: '#f5f5f5',
  },
  box2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // placeItems: 'center',
    alignItems: 'center',
    width: '80%',
    marginBottom: '0.5em',
  },
  box3: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'center',
    borderRadius: '0.5em 0.5em 0 0',
    width: '50%',
    padding: '0.9em 0.5em 0 0.5em',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
  },
  underlined: {
    borderBottom: '2px solid green',
  }
}))

const LoginSpan = styled('span')({
  color: '#0000e6',
  textAlign: 'end',
  fontSize: '1.2rem',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  cursor: 'pointer',
  width: '40%',
  marginTop: '0.5rem',
  display: 'inline-block',
})
const SignUpSpan = styled('span')({
  color: 'green',
  textAlign: 'start',
  fontSize: '1.2rem',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '0.5rem',
  display: 'inline-block',
  width: '40%',
})

export interface Props {
  showLoginForm: () => void;
  showSignupForm: () => void;
  showLogin: boolean;
  showSignUp: boolean;
  Register: (email:string, password:string) => void

}

const SiteAccess = () => {
  const classes = useStyles();
  const { showLoginForm,showLogin, showSignUp, showSignupForm } = useGlobalContext() as Props; // this is a global context hook
  return (
    <Box className={classes.box1}>
      <Box className={classes.box2}>
        <Box className={classes.box3}>
          <SignUpSpan 
            className={`${showSignUp && classes.underlined}`}
            onClick={showSignupForm}
          >
            Register
          </SignUpSpan>
          <LoginSpan  
            className={`${showLogin && classes.underlined}`} 
            onClick={showLoginForm}
          >
            Login
          </LoginSpan>
        </Box>
      </Box>
      {showLogin && <Login />}
      {showSignUp && <Signup />}
      {/* <Signup />
      <Login /> */}
    </Box>
  )
}
export default SiteAccess;