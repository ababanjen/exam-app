import React from 'react'
import Details from '../components/Details'
import ImageSlider from '../components/Slider'
import BaseWrapper from '../components/BaseWrapper'
import { Cell } from 'react-md'

const Home = () => {
    return (
        <BaseWrapper pageName="home">
            <ImageSlider/>
            <Cell offset={1} size={10}>
                <Details/>
            </Cell>
        </BaseWrapper>
    )
}

export default Home