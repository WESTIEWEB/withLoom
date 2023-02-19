import React, { useState, useContext } from 'react'
import { apiGet } from '../axios/axios';

//interface for the AppContextProvider Component
interface AppContextProviderProps {
  children: React.ReactNode
}

export const AppContext = React.createContext<unknown | undefined>(undefined)

const AppContextProvider = ({children}: AppContextProviderProps) => {
  //seting a state that shows or hide login form and signup form
  const [showLogin , setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true);
  const [trending, setTrending] = useState<any>([]);
  const [loading, setLoading] = useState(false);

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
  //get trending coins
  const getTrending = async (url:string) => {
    try{
      setLoading(true);
      const res = await apiGet(url);
      if(res.status === 200){
        setTrending(res.data?.coins);
        console.log(trending)
      }
      setLoading(false);

    }catch(error){
      console.log(error)
    }
  }
  // Handle logout 
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/access";
  }
  React.useEffect(() => {
    getTrending(`${import.meta.env.VITE_APP_TRENDINGCOIN}`)
  },[])
  return (
    <AppContext.Provider 
      value={{
        showLoginForm, 
        showSignupForm,
        showLogin,
        showSignUp,
        loading,
        trending,
        Logout
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