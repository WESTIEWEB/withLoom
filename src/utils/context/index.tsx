import React, { useState, useContext } from 'react'
import { apiGet, apiGetCurrency } from '../axios/axios';

//interface for the AppContextProvider Component
interface AppContextProviderProps {
  children: React.ReactNode
}

export const AppContext = React.createContext<unknown>(undefined)

const AppContextProvider = ({children}: AppContextProviderProps) => {
  //seting a state that shows or hide login form and signup form
  const [showLogin , setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true);

  //states for trnding coins and all coins
  const [trending, setTrending] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState<any>([]);
  
  //state for exchange rates and currencyOptions
  const [rates, setRates] = useState<any>([]);
  const [currencyOpt, setCurrenyOpt] = useState<string[]>([]);
  const [coinOpt, setCoinOpt] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>();
  const [toCurrency, setToCurrency] = useState<string>();
  const [amount, setAmount] = useState<number>(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState<boolean>(true);
  const [exchangeRate, setExchangeRate] = useState<number>(1);

  //this state checkes if the amount is in from currency or to currency

  let toAmount:number, fromAmount: number;
  if(amountInFromCurrency){
    fromAmount = amount;
    toAmount = amount * (exchangeRate ?? 0);
  }
  else {
    toAmount = amount;
    fromAmount = amount / (exchangeRate ?? 0);
  }
  //state for search input field
  const [searchTerm, setSearchTerm] = useState<string>("");

  // function that toggles the login form
  const showLoginForm = () => {
    
    setShowLogin(!showLogin);
    setShowSignUp(false);
  }
  // function that toggles the signup form
  const showSignupForm = () => { 
    setShowSignUp(!showSignUp);
      setShowLogin(false);
  }
  
  // Handle logout 
  const Logout = () => {
    localStorage.clear()
    window.location.href = "/access";
  }

  // Get exchange rates
  const getCurrencyConvertion = async () => {
    try{
      const res = await apiGetCurrency(`${import.meta.env.VITE_APP_EXCHANGERATE}`);
      if(res.status === 200){
        // console.log(res)
        setCurrenyOpt([res.data.base_code, ...Object.keys(res.data.conversion_rates)])
        //this sets the intial value of the currency options
        const firstCurrency = Object.keys(res.data.conversion_rates)[0];
        setFromCurrency(res.data.base_code)
        // console.log(firstCurrency)
        setToCurrency(firstCurrency)
        //this sets the initial value of the exchange rate
        setExchangeRate(res.data.rates[firstCurrency])
        // console.log(toCurrency)
      }
    }catch(error){
      console.log(error)
    }
  }

  // console.log("from", fromCurrency,"to", toCurrency, )
 
  
  // Handlen From amount change 
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount((+e.target.value))
    setAmountInFromCurrency(true)
  }
  //Handle To Amount change
  const handleToAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount((+e.target.value))
    setAmountInFromCurrency(false)
  }
  //function to handle the currency change
  const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromCurrency(e.target.value);
  };
  //function to handle the currency change
  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToCurrency(e.target.value);
  };
  React.useEffect(() => {
    
  },[])
  React.useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
     const getCurrencyConvertion1 = async () => {
      const res = await apiGetCurrency(`${import.meta.env.VITE_APP_EXCHANGERATE}?base=${fromCurrency}&symbols=${toCurrency}`)
      if(res.status === 200){
        setExchangeRate(res.data.rates[toCurrency])
      }
     }
    }
  }, [fromCurrency, toCurrency])
  React.useEffect(() => {
    getCurrencyConvertion()
  }, [])

  //get trending coins
  const getTrending = async (url:string) => {
    try{
      setLoading(true);
      const res = await apiGet(url);
      if(res.status === 200){
        setTrending(res.data?.coins);
        // console.log(trending)
      }
      setLoading(false);

    }catch(error){
      console.log(error)
    }
  }
  React.useEffect(() => {
    getTrending(`${import.meta.env.VITE_APP_TRENDINGCOIN}`)
  },[])

    //Search for coins
    // const SearchCoin = async () => {
    //   try{
    //     if(searchTerm.length > 2){
    //       const res = await apiGet(`${import.meta.env.VITE_APP_SEARCHCOIN}?q=${searchTerm}`)
    //       if(res.status === 200){
    //         console.log(res.data)
    //         setCoins(res.data)
    //       }
    //     }
    //     else setCoins(trending)
    //   }catch(error){
    //     console.log(error)
    //   }
    // }
    const getCoins = async (url:string) => {
      try{
        setLoading(true);
        const res = await apiGet(url);
        if(res.status === 200){
          setCoinOpt(res.data?.coins.map((coin:any) => coin.name));
          setCoins(res.data?.coins);
          // console.log(trending)
        }
        setLoading(false);
  
      }catch(error){
        console.log(error)
      }
    }
    React.useEffect(() => {
      getCoins(`${import.meta.env.VITE_APP_SEARCHCOIN}${''}`)
    },[])

    //Search for coins
    const SearchCoins = async() => {
        if(searchTerm.length > 2) {
        try{
          const res = await apiGet(`${import.meta.env.VITE_APP_SEARCHCOIN}${searchTerm}`)
          setCoins(res.data.coins)
          console.log(res.data.coins)
        }catch(error){
          console.log(error)
        }
      }
      else setCoins(trending)
      
    }
  React.useEffect(() => {
   setTimeout(() => {
    SearchCoins();
   }, 1000)
    // SearchCoins()
  },[searchTerm])
  return (
    <AppContext.Provider 
      value={{
        showLoginForm, 
        showSignupForm,
        showLogin,
        showSignUp,
        loading,
        trending,
        Logout,
        coins,
        handleToAmount,
        setSearchTerm,
        SearchCoins,
        currencyOpt,
        toCurrency,
        fromCurrency,
        amount,
        fromAmount,
        coinOpt,
        toAmount,
        handleAmount,
        getCoins,
        handleFromCurrencyChange,
        handleToCurrencyChange
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