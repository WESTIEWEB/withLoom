import React, { useState, useContext } from 'react'

//interface for the AppContextProvider Component
interface AppContextProviderProps {
  children: React.ReactNode
}

export const AppContext = React.createContext<unknown | undefined>(undefined)

const AppContextProvider = ({children}: AppContextProviderProps) => {
  //seting a state that shows or hide login form and signup form
  const [showLogin , setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // function that toggles the login form
  const showLoginForm = () => {
    
    setShowLogin(!showLogin);
    setShowSignUp(false);
    console.log("showSignup :",showSignUp,"showSignin :", showLogin)
  }
  // function that toggles the signup form
  const showSignupForm = () => { 
    setShowSignUp(!showSignUp);
      setShowLogin(false);
      console.log("showSignup :",showSignUp,"showSignin :", showLogin)
  }
  return (
    <AppContext.Provider 
      value={{
        showLoginForm, 
        showSignupForm,
        showLogin,
        showSignUp
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export default AppContextProvider;

export const useGlobalContext = () => {
  const context = useContext(AppContext)
  if(!context) {
    throw new Error('useGlobalContext must be used within a AppContextProvider')
  }
  return context;
}