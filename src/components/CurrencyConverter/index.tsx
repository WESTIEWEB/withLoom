import React from 'react'
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles,styled } from '@material-ui/core/styles';
import { useGlobalContext } from '../../utils/context';

const Input = styled('input')({
    padding: '0.8em',
    height: '3.5em',
    borderRadius: '0.5em',
    backgroundColor: '#f2f1eb',
    color: '#1c1c1b',
    border: '2px solid #f2f1eb',
    width: '20em',
    // textAlign: 'center',
    paddingLeft: '1.5em',
    // border: 'none'
})
const Select = styled('select')({
    padding: '0.5em',
    position: 'relative',
    borderRadius: '0.5em',
    color: '#1c1c1b',
    height: '3.5em',
    width: '10em',
    border: '2px solid #f2f1eb',
    backgroundColor: '#f2f1eb',
    // width: '8em',
})
const Option = styled('option')({
    position: 'absolute',
})

const btnStyles = makeStyles((theme) => ({

    mainBox: {
        display: 'flex',
        // placeItems: 'center',
        flexDirection: 'row',
        gap: '3em',
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
        gap: '1rem',
        height: '50%',
        width: '80%',
        background: '#FFF'
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
        gap: '1.5rem',
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
// interface for the global context
interface Props {
    currencyOpt: string[];
    // toCurrency: string;
    // fromCurrency: string;
    // handleFromCurrency: () => void;
    // handleToCurrency: () => void;
    // setToCurrency: () => void;
    // setFromCurrency: () => void;
    // amount: number;
    // handleAmount: () => void;
}

interface SelectProps{
    selectedCurrency: string;
    provisionalValue: string;
    onAmountChange: (e:any) => void;
    onChange: (e:any) => void;
    currencyOpt: string[];
    direction: string;
    amount: number;
    name: string;
    type: "string" | "number" | "date" | "time" | "datetime-local" | "month" | "week" | "email" | "password" | "search" | "tel" | "url" | "color" | "file" | "range" | "checkbox" | "radio" | "hidden" | "image" | "submit" | "reset" | "button" | undefined;
    
}
const CurrencyCalc = ({selectedCurrency, onAmountChange, amount, name, onChange,currencyOpt, direction,provisionalValue, type}:SelectProps) => {
    const classes = btnStyles();
  return (
    <Box className={classes.mainBox}>
         <Box className={classes.dropBox}>
            <span>{direction}</span>
            <Select onChange={onChange} value={selectedCurrency}>
            {
                currencyOpt.map((item, index) => 
                    <Option key={index} value={item}>{item}</Option>
                )
            }
            </Select>
        </Box>
        <Box className={classes.dropBox}>
            <span>{provisionalValue}</span>
            <Input name={name} value={amount} onChange={onAmountChange} type={type} /> 
        </Box> 
    </Box>
  )
}
export default CurrencyCalc;