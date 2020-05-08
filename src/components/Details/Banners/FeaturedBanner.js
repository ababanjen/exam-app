import React, { useState } from 'react'
import CardWrapper from './CardWrapper'
import {dataList} from '../../../fakeAPI'
import ImageWrapper from '../../ImageWrapper'
import {BannerDialog} from '../Dialogs'
import {Grid,Cell} from 'react-md'

const initialState = {
    isDialogVisible:false,
    item:''
}
const FeaturedBanner = () => {
    const [state, setState] = useState(initialState)
    const {isDialogVisible, item} = state
    const data = dataList.find(item => item.isFeatured)

    const handleDialogShow = () => {
        if(data) {
            setState({
                ...state,
                isDialogVisible:!isDialogVisible,
                item:data
            })
        }
    }

    return(
    <>
        <CardWrapper>
            <ImageWrapper onClick={()=>handleDialogShow()} path={data &&(data.img)} title={data &&(data.title)} placeHolder="No Featured Item" />
        </CardWrapper>
        <BannerDialog
            id={`banner-dialog-${data.id}`}
            visible={isDialogVisible}
            title={data.title}
            onHide={()=>handleDialogShow()}
            width="50%"
        >
            <Grid>
                <Cell size={4}>
                    <ImageWrapper path={data &&(data.img)} title={data &&(data.title)} placeHolder="No Featured Item" />
                </Cell>
                <Cell size={8}>
                    <p id="speed-boost-description" className="md-color--secondary-text">
                        {item.details}
                    </p>
                </Cell>
            </Grid>
        </BannerDialog>
    </>

    )
}

export default FeaturedBanner