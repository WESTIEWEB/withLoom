import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExchangeRateCalculator = () => {
  const [amount, setAmount] = useState(0);
  const [currencyA, setCurrencyA] = useState('');
  const [currencyB, setCurrencyB] = useState('');
  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    if (currencyA && currencyB) {
      axios.get(`https://staging-biz.coinprofile.co/v3/currency/rate?currency=${currencyA}&base=${currencyB}`)
        .then(response => {
          setExchangeRate(response.data.rates[currencyA]);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [currencyA, currencyB]);

  const HandleAmountChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  }
  const HandleCurrencyAChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyA(event.target.value);
  }
  const HandleCurrencyBChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyB(event.target.value);
    }
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = amount * exchangeRate;
    console.log(`You will get ${result} ${currencyA} for ${amount} ${currencyB}.`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input type="number" value={amount} onChange={HandleAmountChange} />
      </label>
      <br />
      <label>
        Currency A:
        <input type="text" value={currencyA} onChange={HandleCurrencyAChange} />
      </label>
      <br />
      <label>
        Currency B:
        <input type="text" value={currencyB} onChange={HandleCurrencyBChange} />
      </label>
      <br />
      <button type="submit">Calculate</button>
    </form>
  );
};

export default ExchangeRateCalculator;
