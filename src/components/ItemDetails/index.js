import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router'
import {dataList} from '../../fakeAPI'
import Photo from './Photo'
import Details from './Details'
import {Grid, Cell} from 'react-md'

const ItemDetails = props => {
    const [item, setItem] = useState('')
    useEffect(()=> {
        getItem()
    },[])
    const getItem = async() => {
        const {location:{search}, history:{push}}=props
        const id = search.substring(1)
        const itemDetails = await dataList.find(item => item.id === id)
        if(itemDetails) {
            setItem(itemDetails)
        } else {
            push('/')
        }
    }
    return(
        item && (
            <Grid>
                <Cell size={4}>
                    <Photo item={item}/>
                </Cell>
                <Cell size={8}>
                    <Details item={item}/>
                </Cell>
            </Grid>
        )
    )
}

export default withRouter(ItemDetails)