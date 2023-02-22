import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { LoginContainer, LoginForm, useStyles } from './styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { auth } from '../../auth/fireBase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { showAlert } from '../../utils/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    //Setting state variables for email and password
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const navigate = useNavigate();

    //Login global class initialization 
    const loginClasses = useStyles();

    //A fuction that handle email input change
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    //A fuction that handle password input change
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if(e.target.value.length > 6) setIsDisabled(false);
        else setIsDisabled(true);
    }
    
    // show login form, and hide signup form
    //A fuction that handle login form submission
    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken(true);
            if(userCredential){
                toast.success('Login successful');
                localStorage.setItem('token', token);
                localStorage.setItem('email', userCredential?.user?.email!);
                setTimeout(() => {
                    navigate('/coins')
                },1000)

                console.log('Login successful');
            }
            else console.log('Login failed')

        }catch(error:any) {
            if(error.code === 'auth/wrong-password') {
                // wrong login credentials
              console.log("Error: incorrect Email address or Password.");
              // display error message to the user
                toast.warning('Wrong Email or Password');
            }
            else {
                // other errors
                toast.error(error.message);
                console.log(error);
            }
            
        }
    }
  return (
    <Box className={loginClasses.box1}>
        <LoginContainer>
            {/* <Box className={loginClasses.showModal}>
                <span onClick={showLoginForm} className={`${showLogin && loginClasses.underlined}`}>Register</span> 
                <span onClick={showSignupForm} className={`${showSignup && loginClasses.underlined}`}>Login</span>
            </Box> */}
           {/* {
           showLogin &&   */}
            <LoginForm onSubmit={handleLoginSubmit}>
                <Box>
                    <TextField 
                        className={loginClasses.textarea}
                        type='email' 
                        value={email} 
                        fullWidth 
                        id="email" 
                        label="Enter Email" 
                        variant="outlined"
                        onChange={handleEmailChange}
                    />
                </Box>
                <Box>
                    <TextField
                        className={loginClasses.textarea}
                        type='password' 
                        fullWidth 
                        value={password}
                        id="password" 
                        label="Enter Password" 
                        variant="outlined"
                        onChange={handlePasswordChange}
                    />
                </Box>
                <Box className={loginClasses.btn}>
                    <Button disabled={isDisabled} className={`${isDisabled && loginClasses.inactive} ${loginClasses.loginBtn}`} type='submit'>
                        Login
                    </Button>
                </Box>
            </LoginForm>
        </LoginContainer>
    </Box>
  )
}
export default Login;