import React from 'react'
import { ContainerD, HomeContent, homeStyles, BackgroundImg, MainContainer } from './styles';
import { Box, Typography } from '@material-ui/core'
import bgimg from '../../assets/bg.svg'
import Card from '../Card';
import { apiGet } from '../../utils/axios/axios';
import { useGlobalContext } from '../../utils/context';
import Footer from '../Footer/Footer';

interface ContexProps{
  loading: boolean;
  trending: Record<string,any>;
}

const Home = () => {
  const { loading, trending } = useGlobalContext() as ContexProps;
  const useClasses = homeStyles()
  return (
    <>
    <ContainerD>
      <HomeContent>
        <BackgroundImg src={bgimg} />
        <MainContainer>
          <Typography className={useClasses.mainText} variant='h3'>
            <strong style={{color:'#e6e6e6', letterSpacing:'-0.1em',fontStyle:'normal', fontWeight:'400', fontFamily:'sans-serif'}}>WithLoom!!  </strong>Journey Safe into the most trusted way to Buy and Sell Crypto!
          </Typography>
          <Box className={useClasses.trendingContainer}>
            <Typography className={useClasses.trendingText}  variant='h4'>
              Trending Coins
            </Typography>
            {loading && <Typography variant='h6'>Loading...</Typography>}
            <Box className={useClasses.coins}>
              {
                trending.map((el:Record<string,any>) => 
                <Card key={el.item.coin_id} srcLink={el.item.large} altl={el.item.name}>
                  <Box style={{color:'#330000', fontSize:'0.9em'}}>
                    
                    <Typography style={{color:'#330000', fontSize:'0.9em', fontWeight:'600'}} variant='h6'>
                      {/* {el.item.symbol} */}
                      {el.item.symbol}
                    </Typography>
                    <Typography style={{color:'#003300', fontSize:'0.8em', paddingLeft:'0.2em', fontFamily:'sans-serif'}} variant='h6'>
                      {/* {el.item.symbol} */}
                      BTC rate {el.item.price_btc.toString().slice(0,9)}
                    </Typography>
                  </Box>
                </Card>
                )
              }
            </Box>
          </Box>
        </MainContainer>
      </HomeContent>
    </ContainerD>
    <Footer />
    </>
  )
}
export default Home;

