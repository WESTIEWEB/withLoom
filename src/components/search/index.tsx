import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import {makeStyles} from "@material-ui/core/styles";
import {BsSearch as SearchIcon} from "react-icons/bs";
import { useGlobalContext } from '../../utils/context';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
  searchInput: {
    // margin: `2.3em 0 2.3em 0`,
    // background: '#FFFFFF',
    color: '#000000',
    boxSizing: 'border-box',
    opacity: '0.9',
    borderRadius: '0.5em',
    fontFamily: 'sans-serif',
    fontSize: '1rem !important',
    width: '100%',
    padding: '0',
    height: '2.3em',
    border: "2px solid #000000",
    // display: 'flex',
    flexDirection: 'row',
    '& ::placeHolder' :{
      fontSize: '1.2rem',
      color: '#000000',
      fontWeight: '700 bpold',
      opacity: '1',
      fontFamily: 'open sans',
    }
  } ,
  searchContainer : {
    marginTop: '12%',
    // height: '5em',
    width: '100% !important',
    display: 'block',
    padding: 'auto',
    
  } ,
  form: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  //   gap: '0.5em',
    margin: '0.5em 0 0.5em 0',
    justifyContent: 'center',
    alignItems: 'center',
    '& button': {
      textTransform: 'none',
      height: '2.5em !important',
    }
    
  },
  label: {
    width: '30%',
    borderRadius: '0.5em',
    // display: 'grid',
    paddingLeft: '0.3em',
    // gridTemplateColumns: '1fr 1fr',
    // placeItems: 'center',
    
  },
  
   select: {
    height: '2.5em !important',
    borderRadius: '0.5em',
    padding: '0.5em',
    border: 'none'
    }
  ,
  inputBox:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '@media (max-width: 768px)': {
    searchContainer: {
      '& Button': {
        fontSize: '1rem',
      }
    }
  }
})) 

interface props {
  setSearchTerm: (searchTerm: string) => void;
  SearchCoin: () => ((url: string) => void);
}
const Search = () => {
  const [text, setText] = React.useState("");
  const {setSearchTerm, SearchCoin} = useGlobalContext() as props;
  const [filter, setFilter] = React.useState("");
  
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    console.log(text)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(text) {
      setSearchTerm(text)
      SearchCoin()
    }
  }
  const handleFilter = (event:React.FormEvent<HTMLInputElement> | any) => {
    setFilter(event.target.value);
  }; 
 
  return (
    <header className={classes.searchContainer}>
      <form className={classes.form} onSubmit={handleSubmit}>
      <Box className={classes.inputBox}>
      <TextField
        className={`${classes.searchInput} searchInput_mo`}
        id="search-input"
        value={text}
        placeholder="Search Coin"
        onChange={handleChange}
        variant="outlined"
        fullWidth
        InputProps={{
            endAdornment: (
            <InputAdornment position="end">
                <IconButton aria-label="search">
                {/* <SearchIcon /> */}
                {text && <SearchIcon style={{height:'100%'}} />}
                </IconButton>
            </InputAdornment>
            ),
        }}
      />
      
      </Box>
      <label className={classes.label}>
        <span >Filter: </span>
        <select className={classes.select} value={filter} onChange={handleFilter}>
            <option value="">All</option>
            <option value="crypto">Crypto</option>
            <option value="fiat">Fiat</option>
        </select>
      </label> 
    </form>
    </header>
  )
}

export default Search;
