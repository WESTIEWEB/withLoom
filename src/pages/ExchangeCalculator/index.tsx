import React, { useState } from 'react';
import CurrencyCalc from '../../components/CurrencyConverter';
import { useGlobalContext } from '../../utils/context';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Footer from '../../components/Footer/Footer';

const exchange = makeStyles((theme) => ({

  mainBox: {
      display: 'flex',
      // placeItems: 'center',
      alignItems: 'center',
      height: '100vh',
      gap: '3em',
      flexDirection: 'column',
      justifyContent: 'center',
  
  },
  selectBox: {
      marginTop: '0',
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: '1fr',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
      gap: '0.5rem',
  },
  grid: {
      border: '2px solid #f2f1eb',
      display: 'grid',
      placeItems: 'center',
      gridTemplateColumns: '1fr',
      gap: '0.5rem',
      height: '50%',
      width: '80%',
      background: '#FFF',
      '& CurrencyCalc': {
        gap: '1rem',
      }
  },
  cTitle: {
      textAlign: 'center',
      width: '100%',
      fontSize: '1.5rem',
      fontWeight: 700,
      fontSyle: 'normal',
      fontFamily: 'sans-serif',
      color: '#000',
      // background: '#f2faf6;',
      height: '4em',
      padding: '1.5em',
  },
  drpContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      placeItems: 'center',
      '& span': {
          fontSize: '1rem',
          fontFamily: 'sans-serif',
          padding: '0.5em',
      }
  },
  dropBox:{
      display: 'grid',
  },
  hidden: {
      display: 'none',
  },
  '@media (max-width: 768px)': {
      selectBox: {
          gridTemplateColumns: '1fr',
      }
  }
}))
interface ExchangeRates {
  [currency: string]: number;
}
interface Props {
  currencyOpt: string[];
  toCurrency: string;
  fromCurrency: string;
  setToCurrency: (e:any) =>void;
  setFromCurrency: (e:any) => void;
  amount: number;
  toAmount: number;
  fromAmount: number;
  handleToAmount: (e:any) => void;
  handleAmount: (e:any) => void;
  handleFromCurrencyChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  handleToCurrencyChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const CurrencyConverter: React.FC = () => {
  const useClasses = exchange();
  const { currencyOpt, toCurrency, fromCurrency,handleFromCurrencyChange, handleToCurrencyChange, setToCurrency,handleToAmount, setFromCurrency, amount, handleAmount,fromAmount, toAmount } = useGlobalContext() as Props;

  return (
    <>
    <div className={useClasses.mainBox}>
      <Typography className={useClasses.cTitle} variant="h4" component="h4">
        Currency Converter
      </Typography>
      <Box className={useClasses.grid}>
        <CurrencyCalc
          onAmountChange={handleAmount}
          amount={fromAmount}
          name="fromCurrency"
          currencyOpt={currencyOpt}
          selectedCurrency={fromCurrency} 
          onChange={handleFromCurrencyChange} 
          direction={'From'} provisionalValue={'you provide'} 
          type={'number'}
        />
        <CurrencyCalc
          onAmountChange={handleToAmount}
          amount={toAmount}
          name="toCurrency"
          currencyOpt={currencyOpt}
          selectedCurrency={toCurrency} 
          onChange={handleToCurrencyChange} 
          direction={'To'} provisionalValue={'you get'} 
          type={'number'}
        />
      </Box>
    </div>
    <Footer />
    </>
  );
};

export default CurrencyConverter;