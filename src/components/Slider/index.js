import React, { useEffect, useState } from 'react'
import { Grid, Cell } from 'react-md';
import ImageWrapper from '../ImageWrapper'
import {headerImages} from '../../fakeAPI'

const initialState = {
    slideIndex:1,
    item:headerImages[0]
}
const ImageSlider = () => {
    const [state, setState] = useState(initialState)
    const {slideIndex, item} = state

    useEffect(()=> {
        showSlide(slideIndex)
    },[])
    
    const showSlide = (n) =>{
        let i;
        let x = document.getElementsByClassName("slide-img");
        let dots = document.getElementsByClassName("slide");
        if (n > x.length) {
            setState({
                ...state,
                slideIndex:1
            })
        }
        if (n < 1) {
            setState({
                ...state,
                slideIndex:x.length
            })
        }
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-white", "");
        }
        x[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " w3-white";
    }

    const handleIndexChange = (n) => {
        setState({
            slideIndex: slideIndex+n,
            item:headerImages[slideIndex-1]
        })
    }
        const plusDivs =(n)=> {
            handleIndexChange(n)
            showSlide(slideIndex+n);
        }

    const imgStyle ={
        width:'100%',
        maxHeight:'250px'
    }

    return(
        <Grid className="grid-home-slide">
            <Cell size={12}>
                <div className="w3-content w3-display-container" style={{maxWidth:'100%'}}>
                    {headerImages.map(item => (
                        <ImageWrapper 
                            key={item.id} 
                            path={item.img &&(item.img)} 
                            title={item.title &&(item.title)} 
                            placeHolder="No Item Image" 
                            className="slide-img"
                            customStyle={imgStyle}
                            isHeaderImg={true}
                            /> 
                    ))}
                    <div className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style={{width:'100%'}}>
                        <div style={{margin: '15px 0 6% 0'}}>
                            <div className="w3-left w3-hover-text-khaki" onClick={()=>plusDivs(-1)}>&#10094;</div>
                            <div>{item &&(item.title)}</div>
                            <div className="w3-right w3-hover-text-khaki" onClick={()=>plusDivs(1)}>&#10095;</div>
                        </div>
                        <span className="w3-badge slide w3-border w3-transparent w3-hover-white" ></span>
                        <span className="w3-badge slide w3-border w3-transparent w3-hover-white" ></span>
                        <span className="w3-badge slide w3-border w3-transparent w3-hover-white" ></span>
                    </div>
                </div>
            </Cell>
        </Grid>
    )
}

export default ImageSlider