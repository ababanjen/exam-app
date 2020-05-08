import React from 'react'
import {DialogContainer} from 'react-md'

const BannerDialog = (props) => {
    const actions = [{
        onClick: props.onHide,
        primary: true,
        children: 'Close',
    }];
    return(
        <DialogContainer
            {...props}
            actions={actions}
            modal
        >
            {props.children}
        </DialogContainer>
    )
}

export default BannerDialog