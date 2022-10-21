import React,{useState} from 'react'
import {courusel} from './carrusel'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

import style from './Carousel.module.css'

    


export default function Carousel() {
    const [positionCarousel, setPosition] = useState(0)
    const array = courusel.slice(positionCarousel,positionCarousel + 1)
    
        const nextCarousel = ()=>{
            if(positionCarousel >= courusel.length-1){
                setPosition(0)
            }else{
                setPosition(positionCarousel + 1)
            }
    }

        const beforeCarousel = ()=>{
            if(positionCarousel <= 0){
                setPosition(courusel.length-1)

            }else{
                setPosition(positionCarousel - 1)
            }
        }

    return (
    <div className={style.container} >
        <button onClick={beforeCarousel} className={style.btn1}><MdOutlineKeyboardArrowLeft color="#00a8e8" className={style.incono1} size="1.8rem"/></button>
        <ul className={style.containerUl}>
            <li><img className={style.img} src={array[0].img}/></li>
        </ul>
        <button onClick={nextCarousel} className={style.btn2}><MdOutlineKeyboardArrowRight color="#00a8e8"   className={style.incono2} size="1.8rem"/></button>
        <ul className={style.Containerpagination} >
            {courusel.map(e=> <li className={positionCarousel + 1 === e.id ?style.active :style.pagination } key={e.id}></li>)}
        </ul>
    </div>
  )
}
