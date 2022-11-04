import {useState,useRef,useEffect} from 'react'
import {courusel} from './carrusel'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {captureElementsDom} from './containerSlider'
import style from './Carousel.module.css'




export default function Carousel() {
    const [positionCarousel, setPosition] = useState(1);
    const [activateBottom ,setActivateBottom] = useState(false)
    const refSlider = useRef()
   

    const nextCarousel = ()=>{
        let sliderSectionFirst = captureElementsDom()[0];
        refSlider.current.style.marginLeft="-200%"
        refSlider.current.style.transition ="all 0.5s"
        setPosition(positionCarousel+1)
        if(positionCarousel >= 5){
            setPosition(1)
        }
        setTimeout(()=>{
        refSlider.current.style.transition ="none";
        refSlider.current.insertAdjacentElement("beforeend",sliderSectionFirst);
        refSlider.current.style.marginLeft="-100%" 
        },500)
    }
    const beforeCarousel = ()=>{
        let sliderSectionFirst = captureElementsDom()[captureElementsDom().length-1];
        
        refSlider.current.style.marginLeft="0%"
        refSlider.current.style.transition ="all 0.5s"
        setPosition(positionCarousel+1)
        if(positionCarousel >= 5){
            setPosition(1)
        }
        setTimeout(()=>{
        refSlider.current.style.transition ="none";
        refSlider.current.insertAdjacentElement("afterbegin",sliderSectionFirst);
        refSlider.current.style.marginLeft="-100%" 
        },500)
    }

   
    
    useEffect(()=>{
        if(!activateBottom){
            const containerSlider=captureElementsDom()
            let containerSliderLast = containerSlider[containerSlider.length-1]
            refSlider.current.insertAdjacentElement("afterbegin",containerSliderLast)
        }
        const idInterval = setInterval(()=>{
            beforeCarousel()
        },2000)
        if(activateBottom){
            clearInterval(idInterval)
        }
        
        return ()=> clearInterval(idInterval)
    },[activateBottom])
    
    return (
    <div  onMouseOver={()=>setActivateBottom(true)} className={style.containerSlider} >
        <div ref={refSlider} className={style.slider} id="slider">
           
            {courusel.map(img=>{
            return  <div key={img.id} className="sliderSection">
                         <img className={style.sliderImg}src={img.img}/>
                    </div>
            })}
        </div>

       {activateBottom && <button onClick={beforeCarousel} className={style.btn1}><MdOutlineKeyboardArrowLeft color="#00a8e8" className={style.incono1} size="1.8rem"/></button>}
        {activateBottom && <button onClick={nextCarousel} className={style.btn2}><MdOutlineKeyboardArrowRight color="#00a8e8"   className={style.incono2} size="1.8rem"/></button>}
   
        <ul className={style.Containerpagination} >
            {courusel.map(e=> <li className={positionCarousel == e.id ?style.active :style.pagination } key={e.id}></li>)}
        </ul>
    </div>
  )
}






