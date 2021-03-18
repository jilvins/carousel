import React, {useContext} from 'react'
import {Context} from './AppContext.js'


export default function CarouselItem ({slide}) {
    let {slideItems, currentPic, setCurrentPic, setScrollDirection, scrollDirections} = useContext(Context)

    function nextPic () {
        currentPic <= slideItems.length-1 ? setCurrentPic(currentPic + 1) : setCurrentPic(1)
        setScrollDirection("toRight")
      }
    function prevPic () {
        currentPic == 1 ? setCurrentPic(slideItems.length) : setCurrentPic(currentPic - 1)
        setScrollDirection("toLeft")
      }

    return (
        <div className="carousel-item">
           <img src={slide.imgSrc} className={`${scrollDirections}`}/>
           <button className="right-side" onTouchMove={prevPic}></button>
           <button className="left-side" onTouchMove={nextPic}></button>
           <button onClick={prevPic} className="nav-btn right">{"<"}</button>
           <button onClick={nextPic} className="nav-btn left">{">"}</button>
        </div>
    )
}