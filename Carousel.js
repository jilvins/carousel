import React, {useContext} from 'react'
import {Context} from './AppContext.js'
import CarouselItem from './CarouselItem.js'

export default function Carousel () {

    const {slideItems, currentPic, setCurrentPic, setScrollDirection} = useContext(Context)

    function choosePic (e) {
        setCurrentPic(e.target.innerHTML)
    }

    function nextPic () {
        currentPic <= slideItems.length-1 ? setCurrentPic(currentPic + 1) : setCurrentPic(1)
        setScrollDirection("toRight")
      }
    function prevPic () {
        currentPic == 1 ? setCurrentPic(slideItems.length) : setCurrentPic(currentPic - 1)
        setScrollDirection("toLeft")
      }
    

    const newSlide = slideItems.filter((slide)=>slide.id==currentPic).map((slide) => (
         
        <CarouselItem key={slide.id} slide={slide} onTouchMove={nextPic}/>      
    )   
    )

    return (
        <div className="carousel-component">
            {newSlide}
            <button onClick={prevPic} className="nav-btn right">{"<"}</button>
           <button onClick={nextPic} className="nav-btn left">{">"}</button>
        <div>
            {slideItems.map((slide) => (
                <button key={slide.id} onClick={choosePic} className={`selected-img
                 ${(slide.id==currentPic) ? "currently-selected" : "not-selected"}`}
                
                >{slide.id}</button>
            ))}
            <button onTouchMove={nextPic} className="movable">touch me</button>
        </div>
        </div>
    )
}