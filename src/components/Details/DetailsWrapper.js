import React from 'react'
import { Paper } from 'react-md';
import { withRouter } from 'react-router'

const DetailsWrapper = ({ children, title, details, isBanner, redirectItemId, history }) => {
  const style = {    
      height: '100px',
      width: '93%'
  }
  const itemDetail = isBanner ? `${details.substring(0, details.length - (details.length-10))}...`: details;
  const handleOnClick = ()=> {
    const {push} = history
    if(redirectItemId) {
      push(`/item-details?${redirectItemId}`)
    }
    return
  }
  return(
    <Paper className="md-cell md-cell--12 md-grid" style={isBanner && (style)} onClick={()=>handleOnClick()}>
      <section className="md-cell md-cell--3-tablet md-cell--4-desktop">
        {children}
      </section>
      <section className="md-cell md-cell--5-tablet md-cell--8-desktop">
        <h4><b>{title}</b></h4>
        <p>{itemDetail}</p>
      </section>
    </Paper>
  )
}
export default withRouter(DetailsWrapper)