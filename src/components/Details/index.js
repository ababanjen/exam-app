import React from 'react'
import DetailElements from './DetailElements'
import Banners from './Banners'
import { Grid, Cell } from 'react-md';

const Details = (props) => {
    return(
        <Grid className="grid-home">
            <Cell size={8}>
                <DetailElements/>
            </Cell>
            <Cell size={4}>
                <Banners/>
            </Cell>
        </Grid>
    )
}

export default Details