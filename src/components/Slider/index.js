import React, { useEffect, useState } from 'react'
import {headerImages} from '../../fakeAPI'

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
                    <>
                    <div key={s.id} className={i === current-1 ? 'slide active' : 'slide'}>
                        <div>
                            <h1>{s.title}</h1>
                            <h3>{s.subtitle}</h3>
                        </div>
                        {i === current-1 && (
                            <img src={s.img} className="image"/>
                        )}
                    </div>
                    </>
                ))}
            </section>
            <div className="slide-btn">
                <div onClick={()=>handleSlide()} >&#10094;</div>
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