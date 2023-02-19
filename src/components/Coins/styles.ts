import { makeStyles, styled } from "@material-ui/core";

export const coinStyles = makeStyles((theme) => ({
    tableBody : {
        display: 'grid',
        width: '90%'
    },
    tableHead: {
        display: 'grid'
    },
    tableRow: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr'
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