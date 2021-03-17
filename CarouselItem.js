import React, {useContext} from 'react'
import {Context} from './AppContext.js'


export default function CarouselItem ({slide}) {
    let {scrollDirections} = useContext(Context)

    return (
        <div className={`carousel-item ${scrollDirections}`}>
           <img src={slide.imgSrc}/>
           <button className="right-side"></button>
           <button className="left-side"></button>
        </div>
    )
}