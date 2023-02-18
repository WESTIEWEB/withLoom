import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../auth/fireBase';
import { showAlert } from '../../utils/config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { SignupContainer, SignupForm, signUpStyles } from './styles';
import { useGlobalContext } from '../../utils/context';
import { Props } from '../../pages/Register';


const Signup = () => {
    //Setting state variables for email and password
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    //calling states from global context
    // const { showLoginForm,showLogin, showSignUp, showSignupForm } = useGlobalContext() as Props;

    const navigate = useNavigate();

    //Login global class initialization 
    const signupClasses = signUpStyles();

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

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken(true);
        if(userCredential){
          toast.success('Accout created successfully');
          setTimeout(() => {
            navigate('/login')
          },1000)
            console.log('sign up successful');
        }
        else console.log('sign up failed')

      }catch(error: any) {
            // console.log(error);
            // toast.error(error.message)
            if (error.code === "auth/email-already-in-use") {
              // Email address already exists
              console.log("Error: Email address already in use.");
              // display error message to the user
              toast.warning("email address already in use. Please use a different email address.");
            } else {
              // Other errors
              console.log("Error:", error.message);
              // display error message to the user
              toast.error(error.message);
            }
      }
    }
  return (
    <Box className={signupClasses.box1}>
      <SignupContainer>  
        <SignupForm onSubmit={handleSubmit}>
          <Box>
              <TextField 
                  type='email' 
                  value={email} 
                  fullWidth 
                  id="outlined-basic" 
                  label="Enter Email" 
                  variant="outlined"
                  onChange={handleEmailChange}
              />
          </Box>
          <Box>
              <TextField
                  type='password' 
                  fullWidth 
                  value={password}
                  id="outlined-basic" 
                  label="Enter Password" 
                  variant="outlined"
                  onChange={handlePasswordChange}
              />
          </Box>
          <Box>
              <Button disabled={isDisabled} className={`${isDisabled && signupClasses.inactive} ${signupClasses.submitBtn}`} type='submit'>
                  SignUp
              </Button>
          </Box>
        </SignupForm>
      </SignupContainer>
    </Box>
  )
}
export default Signup;