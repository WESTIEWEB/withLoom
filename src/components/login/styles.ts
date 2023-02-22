import { makeStyles, styled } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  box1: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }
  ,
  loginBtn: {
    width: '100%',
    padding: '0 !important',
    backgroundColor: '#6f92e8 !important',
    height: '4rem',
    color: '#fff !important',
    fontSize: '1.5rem !important',
    fontWeight: 'bold',
    fontFamily: 'Manrope',
    cursor: 'pointer',
    pointerEvents: 'auto',
    '& :hover': {
      // boxShadow: '0 0 0 0.2rem rgba(122,123,255,0.5)',
      padding: '0 !important',
      border: 'none !important',
      background: 'gray',
      margin: '0 !important',
      lineHeight: '2.5em !important',
      boxSizing: 'border-box !important',
      outline: 'none',
      color: '#fff',
    }
  },
  showModal: {
    display: 'flex',
    justiFyContent: 'space-between',
    justifyContent: 'center',
    gap: '2rem',
    width: '50%',
    '& span': {
      display: 'inline-block',
      width: '20%'
    }
  },
  textarea:{
    fontSize: '0.8rem !important',
    fontFamily: 'sans-serif',
    color: "#fff",
    '& input': {
      fontSize: '1.5rem !important',
    }
  },
  underlined:{
    borderBottom: '1px solid #ccc',
  },
  inactive: {
    // backgroundColor: '#ccc !important',
    opacity: '0.4 !important',
    color: '#000 !important',
    cursor: 'not-allowed',
    poiterEvents: 'none',
  }
}))

export const LoginForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    gap:  '0.8em',
    '@media (max-width: 600px)': {
        with: '100%',
    }
})

export const LoginContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
})