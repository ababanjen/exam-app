import React, { useState } from 'react'
import {headerImages} from '../../fakeAPI'
import ImageWrapper from '../ImageWrapper'
const initialState = {
    current:1
}
const ImageSlider = () => {
    const [state, setState] = useState(initialState)
    const {current} = state

    const handleSlide = ({isNext,isDot}) => {
        let val = isNext ? current+1 : current-1
        if(val > headerImages.length) val = 1
        if(val < 1) val = headerImages.length
        setState({
            current: isDot ? isDot : val
        })
    }
    return(
        <div className="slide-wrapper">
            <section className="slider">
                {headerImages.map((s, i) => (
                    <div key={s.id} className={i === current-1 ? 'slide active' : 'slide'}>
                        {i === current-1 && (
                            <>
                            <div>
                                <h1>{s.title}</h1>
                                <h3>{s.subtitle}</h3>
                            </div>
                            <ImageWrapper path={s.img &&(s.img)} title={s.title &&(s.title)} className="image" placeHolder="No Slide Image" isHeaderImg={true}/>
                            </>
                        )}
                    </div>
                ))}
            </section>
            <div className="slide-btn">
                <div onClick={()=>handleSlide({isNext:false})} >&#10094;</div>
                <div onClick={()=>handleSlide({isNext:true})} className="slide-btn right">&#10095;</div>
                <div className="dot-wrapper">
                    {headerImages.map((s, i) => (
                        <span className={i === current-1 ? 'dot active' : 'dot'}
                        onClick={()=>handleSlide({isDot:i+1})}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageSlider