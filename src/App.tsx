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
          <Router>
            <Routes>
              <Route path="/" element={<SiteAccess />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={
                <ProtectUserRoute>
                  <></>
                </ProtectUserRoute>
              } />
            </Routes>
          </Router>
        </ThemeProvider>
      </AppContextProvider>
    </React.Fragment>
  )
}

export default App;
