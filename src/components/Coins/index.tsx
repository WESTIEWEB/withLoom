import React, { useState, useEffect } from "react";
import axios from "axios";
import { coinStyles } from "./styles";

interface Coins {
    coins: Array<Record<string, any>>;
}
const CoinList = () => {
  const [coins, setCoins] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
    
  useEffect(() => {
    const getCoins = async (url:string) => {
        try{
            const response = await axios.get(url);
            if(response.status === 200){
                setCoins(response.data.data.rates);
            }
        
            }catch(error){
                console.log(error);
            }
        }
    getCoins("https://staging-biz.coinprofile.co/v3/currency/rate");

    // console.log("coins: ", coins)
    
  }, []);
  console.log("coins: ", coins)

  const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleFilter = (event:React.FormEvent<HTMLInputElement> | any) => {
    setFilter(event.target.value);
  };
  console.log(coins)
  const filteredCoins = coins.filter((coin:any) => {
    for (const key in Object.keys(coin)) {
    return (
      key.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "" || coin.key === filter)
    );
    }
  });

  const coinClasses = coinStyles()
  return (
    <>
      <div>
        <label>
          Search:
          <input type="text" value={searchTerm} onChange={handleSearch} />
        </label>
        <label>
          Filter:
          <select value={filter} onChange={handleFilter}>
            <option value="">All</option>
            <option value="crypto">Crypto</option>
            <option value="fiat">Fiat</option>
          </select>
        </label>
      </div>
      <table className={coinClasses.tableBody}>
        <thead className={coinClasses.tableHead}>
          <tr className={coinClasses.tableRow}>
            <th>Currency</th>
            <th>Type</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin:any) => {
            const keys = Object.keys(coin)
            return (
            <tr key={coin.key}>
              {/* <td>{keys.rate}</td>
              <td>{coin.rate}</td>
              <td>{coin.rate}</td> */}
            </tr>
          )
          })}
        </tbody>
      </table>
    </>
  );
};

export default CoinList;

