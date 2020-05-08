import React from 'react'
import { Card, CardText, CardTitle } from 'react-md';

const CardWrapper = ({children, title, isRecommened}) => {
    const style = { maxWidth: '80%' };
    return(
        <Card style={style} className="md-block" >
            {isRecommened && (<CardTitle subtitle={title} />)}
            <CardText>
                {children}
            </CardText>
        </Card>
    )
}

export default CardWrapper