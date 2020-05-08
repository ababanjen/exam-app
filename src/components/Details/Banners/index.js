import React from 'react'
import FeaturedBanner from './FeaturedBanner'
import RecommendedBanners from './RecomendedBanners'
import OtherBanners from './OtherBanners'
import { Cell } from 'react-md';

const Banners = () => {
    return(
        <>
        <Cell size={12}>
            <FeaturedBanner/>
        </Cell>
        <Cell size={12}>
            <RecommendedBanners/>
        </Cell>
        <Cell size={12}>
            <OtherBanners/>
        </Cell>
        </>
    )
}

export default Banners