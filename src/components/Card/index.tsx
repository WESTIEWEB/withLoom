import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { showAlert } from '../../utils/config/index';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',
  justifyContent: 'flex-start',
  color: theme.palette.text.secondary,
  height: 60,
//   width: '100%',
  lineHeight: '60px',
  '@media (max-width: 768px)': {
    // width: '50%',
  }
}));
const Img = styled('img')({
    height: '60px',
    width: '60px',

});
interface CardProps{
srcLink: string;
altl: string;
children: React.ReactNode;
style?: React.CSSProperties;
}

const lightTheme = createTheme({ palette: { mode: 'light' } });

const Card:React.FC<CardProps> = ({children , srcLink, altl}) => {
  return (
    <Grid container spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={12} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'transparent',
                display: 'grid',
                gridTemplateColumns: { md: '1fr',sm: '1fr', xs: '1fr' },
                gap: 2,
              }}
            >
              {[1].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                    <Img src={srcLink} alt={altl}/>
                    {children}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
export default Card;