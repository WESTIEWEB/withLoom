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
  loginBtn: {
    width: '100%',
    padding: '0 !important',
    backgroundColor: '#3300cc !important',
    height: '4rem',
    color: '#fff',
    cursor: 'pointer',
    pointerEvents: 'auto',
    '& :hover': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      padding: '0 !important',
      outline: 'none !important',
      border: 'none !important',
      margin: '0 !important',
      lineHeight: '4 !important',
      boxSizing: 'border-box !important',
      color: '#000',
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
    width: '50%',
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
    width: '80%',
})