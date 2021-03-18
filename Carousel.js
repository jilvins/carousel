import React, {useContext} from 'react'
import {Context} from './AppContext.js'
import CarouselItem from './CarouselItem.js'

export default function Carousel () {

    const {slideItems, currentPic, setCurrentPic} = useContext(Context)

    function choosePic (e) {
        setCurrentPic(e.target.innerHTML)
    }

 
    const newSlide = slideItems.filter((slide)=>slide.id==currentPic).map((slide) => (
         
        <CarouselItem key={slide.id} slide={slide}/>      
    )   
    )

    return (
        <div className="carousel-component">
            {newSlide}
            
        <div>
            {slideItems.map((slide) => (
                <button key={slide.id} onClick={choosePic} className={`selected-img
                 ${(slide.id==currentPic) ? "currently-selected" : "not-selected"}`}
                
                >{slide.id}</button>
            ))}
            
        </div>
        </div>
    )
}