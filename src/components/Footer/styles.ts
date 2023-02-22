import { makeStyles, styled } from '@material-ui/core/styles';

export const footerStyles = makeStyles((theme) => ({
    footerMain: {
        position: 'relative',
        bottom: '0',
        display: 'block',
        width: '100%',
        height: '20em',
        margin: 'auto',
        background: '#e0e0e0'
    },
    liItems: {
        color: '#000 !important',
        cursor: 'pointer',
        '& a': {
            color: '#000 !important',
            textDecoration: 'none',
            '&:hover': {
                color: '#00f !important',
            }
        }
    }
}))

export const FooterContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'center',
    width:'90%',
    margin: '1em',
})
export const FooterMenu = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
})
export const UlItems = styled('ul')({
    display: 'grid',
    gridTemplateColumns: '1fr',
    '& li': {
        listStyle: 'none',
        fontSize: '1.2em',
        color: '#000 !important',
    }
})