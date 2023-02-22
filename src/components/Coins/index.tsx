import React, { useState, useEffect } from "react";
import axios from "axios";
import { coinStyles } from "./styles";
import Box from '@material-ui/core/Box';
import {BsSearch as SearchIcon} from "react-icons/bs";
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useGlobalContext } from '../../utils/context';
import Card from '../Card/index';
import Pagination from "@material-ui/lab/Pagination";
import Footer from "../Footer/Footer";
import Typography from "@material-ui/core/Typography";

//defining interface for typescript
interface Coins {
    coins: Array<Record<string, any>>;
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    SearchCoin: () => ((url: string) => void);
    coinOpt: Array<string>;
    loading: boolean;
    getCoins: (url:string) => void;
}
  
const CoinList = () => {
  const [text, setText] = React.useState("");
  const [selctedTerm, setSelctedTerm] = React.useState("");

  //managing states with context
  const {setSearchTerm,coinOpt,getCoins, loading, SearchCoin,searchTerm, coins} = useGlobalContext() as Coins;
  const [filter, setFilter] = React.useState("");

  //pagination logic
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 40;

   const slicedData = coins.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // const handleNextPage = () => {
  //   setCurrentPage(currentPage + 1);
  // };

  // const handlePrevPage = () => {
  //   setCurrentPage(currentPage - 1);
  // };
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };


  const handleFilter = (event:React.FormEvent<HTMLInputElement> | any) => {
    setSearchTerm(event.target.value);
    setSelctedTerm(event.target.value);
  }; 
  const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
 
  React.useEffect(() => {
    getCoins(`${import.meta.env.VITE_APP_SEARCHCOIN}${''}`)
    
  },[])

  const coinClasses = coinStyles()
  return (
    <>
    <header className={coinClasses.searchContainer}>
      <form className={coinClasses.form}>
      <Box className={coinClasses.inputBox}>
      <TextField
        className={`${coinClasses.searchInput} searchInput_mo`}
        id="search-input"
        value={searchTerm}
        placeholder="Search Coin"
        onChange={handleSearch}
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
      <label className={coinClasses.label}>
        {/* <span >Filter: </span> */}
        <select className={coinClasses.select} value={selctedTerm} onChange={handleFilter}>
            {coinOpt.splice(0,10).map((ele) => 
                <option key={ele} value={ele}>{ele}</option>
            )}
        </select>
      </label> 
    </form>
    <Box className={coinClasses.box}>
        <Box className={coinClasses.box1}>
          <Box className={coinClasses.box2}>
            {loading && <h1 style={{width:'100%', height:'100vh'}}>Loading...</h1>}
            {
              slicedData.length > 0 ?slicedData.map((coin) => {
                return(
                  coin.large && <Card srcLink={coin.large} altl={coin.name}>
                  <Box style={{color:'#330000', fontSize:'0.9em'}}>
                      
                      <Typography style={{color:'#330000', fontSize:'0.9em', fontWeight:'600'}} variant='h6'>
                        {/* {el.item.symbol} */}
                        {coin.symbol}
                      </Typography>
                      { coin.market_cap_rank &&
                      <Typography style={{color:'#003300', fontSize:'0.8em', paddingLeft:'0.2em', fontFamily:'sans-serif'}} variant='h6'>
                        {/* {el.item.symbol} */}
                        market_cap_rank : {coin.market_cap_rank}
                        
                      </Typography>
                      }    
                    </Box>
                </Card>
                )
              }
              )
              :
              <h5 style={{width:'100%', fontFamily:'open sans', textAlign:'center',display:'grid', placeItems:'center', height:'100vh'}}>No result found</h5>
            }
          </Box>
        </Box>
      </Box>
      <div>
      <div className={coinClasses.roots}>
        <Pagination
          count={Math.ceil(coins.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
    <Footer />
    </header>
    </>
  );
};

export default CoinList;

