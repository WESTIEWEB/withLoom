import { makeStyles, styled } from '@material-ui/core/styles';

export const homeStyles = makeStyles((theme) => ({
    homeContent: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        margin: 'auto',
        width: '100%',
        height: '100%',
    },
    mainText: {
        textAlign: 'start',
        display: 'grid',
        color: '#fff',
        fontWeight: 700,
        fontSize: '3.5em',
        fontFamily: 'Manrope',
    },
    trendingText:{
        fontFamily: 'Inter',
        fontSize: '1.5em',
        color: '#fff',
        margin: '0.8em',

    },
    trendingContainer: {
        display: 'grid',
        width: '100%',
        height: '100%',
        placeItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    coins: {
        // padding: '1em',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
    },
    '@media (max-width: 768px)': {
        mainText: {
            fontSize: '1.8em',
            // textAlign: 'jusify'
        }
    }
}))

export const ContainerD = styled('div')({
    position: 'relative',
    top: '13%',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    zIndex: 0,

})

export const HomeContent = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    margin: 'auto',
    width: '100%',
    height: '100%',
})
export const MainContainer = styled('div')({
    display: 'grid',
    position: 'absolute',
    // margin: '0.8em',
    placeItems: 'center',
    top: '20%',
    padding:'2em',
    gap: '4em',
    gridTemplateColumns: '1fr 1fr',
    // margin: 'auto',
    width: '100%',
    '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        top: '10%',

    }
})

export const BackgroundImg = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
})