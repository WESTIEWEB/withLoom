import { makeStyles, styled } from "@material-ui/core";

export const coinStyles = makeStyles((theme) => ({
    box : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        flexDirection: 'column',
        // height: '100vh',
        // gridTemplateColumns: '1fr 1fr',
        marginTop: '7%'
    },
    box1 : {
        display: 'grid',
        placeItems: 'center',
        width:'85%',
    },
    box2: {
        display: 'grid',
        width: '100%',
        placeItems: 'center',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
    tableBody : {
        display: 'grid',
        width: '90%'
    },
    tableHead: {
        display: 'grid'
    },
    tableRow: {
        fontSize: '1em',
        fontWeight: 'normal',
        fontFamily: 'Inter',
        display: 'grid',
        justifyContent: 'space-between',
        gridTemplateColumns: '1fr 1fr 1fr'
    },searchInput: {
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
        marginTop: '15%',
        // height: '5em',
        height: '100vh',
        width: '100% !important',
        display: 'block',
        padding: 'auto',
        
      } ,
      roots: {
        display: 'flex',
        flrexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0.8em',
        width: '100%',
        fontFamily: 'Inter',
        "& > *": {
          fontSize: '1.2rem',
          marginTop: theme.spacing(2),
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }
    },
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
        border: '1 px solid grey',
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
            // marginTop: '30%',
          '& Button': {
            fontSize: '1rem',
          }
        },
        box2: {
            width: '100%',
            // height: '100%',
            gridTemplateColumns: '1fr 1fr',
            justifyContent: 'center',
        },
        label: {
        
            display:'flex',
            // flexDirection: 'column',
            width: '100%',
            fontFamily: 'Inter',
            color: 'rgba(0, 0, 0, 0.54)',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '& select': {
                width: '100%',
                border:'1px solid #000000',
            }

        },
        searchInput: {
            width: '100%',
            textAlign: 'center',
        },
        form:{
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5em',
        },
        box: {
            marginTop: '10%',
        },
      }
}))

export const CoinContainer = styled('div')({
    display: 'block',
    width: '100%',
    height: '100vh',
    margin: 'auto'
})
export const CoinGrid = styled('div')({
    display: 'grid',
    width: '100%',
    placeItems: 'center',
    margin: 'auto'
})
export const CoinGrid1 = styled('div')({
    display: 'grid',
    width: '100%',
    height: '100vh',
    margin: '2em',
})
export const CoinGrid2 = styled('div')({
    display: 'grid',
    width: '100%',
    height: '100vh',
    margin: 'auto'
})