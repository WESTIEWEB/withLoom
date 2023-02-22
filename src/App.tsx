import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {WithBloom} from './utils/theme';
import AppContextProvider from './utils/context';
import SignUp from './components/signup';
import Login from './components/login';
import SiteAccess from './pages/Register';
import { ProtectUserRoute } from './auth/protectRoute';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import ExchangeRateCalculator from './pages/ExchangeCalculator';
import CoinList from './components/Coins';

const theme = createTheme({
  palette: {
    ...WithBloom
  }
}
);

const App = () => {
  return (
    <React.Fragment>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <Header />
          <Router>
            <Routes>
              <Route path="/access" element={<SiteAccess />} />
              {/* <Route path="/exchange" element={<ExchangeRateCalculator />} /> */}
              <Route path="/coins" element={<ProtectUserRoute> <CoinList /></ProtectUserRoute>} />
              <Route path="/exchange" element={<ProtectUserRoute> <ExchangeRateCalculator /></ProtectUserRoute>} /> 
              <Route path="/" element={  <Home /> } />
            </Routes>
          </Router>
          {/* <Footer /> */}
        </ThemeProvider>
      </AppContextProvider>
    </React.Fragment>
  )
}

export default App;
