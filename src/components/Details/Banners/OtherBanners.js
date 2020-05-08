import React, {useState} from 'react'
import CardWrapper from './CardWrapper'
import {otherBanners} from '../../../fakeAPI'
import {BannerDialog} from '../Dialogs'
const initialState = {
    isDialogVisible:false,
    item:''
}
const OtherBanners = () => {
    const [state, setState] = useState(initialState)
    const {isDialogVisible, item} = state
    const handleDialogShow = (item) => {
        setState({
            ...state,
            isDialogVisible:!isDialogVisible,
            item
        })
    }
    return(
        <>
        <CardWrapper>
            {otherBanners.map(item => (
                <div key={item.id} className="Banner-other" onClick={()=>handleDialogShow(item)}>
                    {item.title}
                </div>
            ))}
        </CardWrapper>
        <BannerDialog
            id={`banner-dialog-${item.id}`}
            visible={isDialogVisible}
            title={item.title}
            onHide={()=>handleDialogShow(item)}
            width="20%"
        >
            <p>{item.content}</p>
        </BannerDialog>

        </>
    )
}

export default OtherBanners