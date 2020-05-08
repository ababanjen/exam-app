import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import {dataList} from '../../fakeAPI'
import DetailsWrapper from './DetailsWrapper'
import ImageWrapper from '../ImageWrapper'

import { Button, Cell } from 'react-md';
const defaultSize = 2
const initialState = {
    limit:defaultSize,
    showItemPerNum:defaultSize,
    showMore: true,
    detailsList:[]
}

const DetailElement = () => {
    const [state, setState] = useState(initialState)
    const {limit, detailsList, showMore, showItemPerNum } = state
    useEffect(()=> {
        firstLoad()
    },[])

    const firstLoad = () => {
        setState({
            ...state,
            detailsList: dataList.slice(0,state.limit)
        })
    }
    const handleShowMore = () => {
        const cntLimit = limit+showItemPerNum
        setState({
            ...state,
            limit:cntLimit,
            showMore: cntLimit < dataList.length,
            detailsList: dataList.slice(0,cntLimit)
        })
    }

    return(
        <>
        <Cell size={12}> 
            {detailsList.map(item => (
                <DetailsWrapper
                    {...item}
                    key={item.id} 
                    redirectItemId={item.id}
                    >
                    <ImageWrapper path={item.img &&(item.img)} title={item.title &&(item.title)} placeHolder="No Item Image"/>
                </DetailsWrapper>
            ))}
        </Cell>    
        {showMore && (
            <Cell size={2} offset={5} className="md-block-centered">
                <Button flat primary swapTheming onClick={()=>handleShowMore()}>more</Button>
            </Cell>
        )}   
        </>
    )
}

export default withRouter(DetailElement)