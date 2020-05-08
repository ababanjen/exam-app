import React from 'react'
import DetailsWrapper from '../DetailsWrapper'
import CardWrapper from './CardWrapper'
import {dataList} from '../../../fakeAPI'
import {Media} from 'react-md'

const RecommendedBanners = () => {
    let list = []
    dataList.forEach(item => {
        if(item.isRecomended) {
            list.push(item)
        }
    })
    return(
        <CardWrapper title="Recommended" isRecommened={true}>
            {list.map(item => (
                <DetailsWrapper 
                    {...item}
                    key={item.id} 
                    isBanner={true} 
                    redirectItemId={item.id}
                    >
                    <Media aspectRatio="4-3">
                        <img src={item.img} alt={item.title} />
                    </Media>
                </DetailsWrapper>
            ))}
        </CardWrapper>
    )
}

export default RecommendedBanners