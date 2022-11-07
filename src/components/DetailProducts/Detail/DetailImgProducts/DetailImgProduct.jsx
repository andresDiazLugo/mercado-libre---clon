import {useState, useRef} from 'react';
import style from './DetailImgProduct.module.css';
import {useSelector} from 'react-redux'
import {getMousePosition,desbledLens} from './getMousePosition' 
export default function DetailImgProduct({setRenderGalery}) {
   const productDetail = useSelector(state => state.products.productDetail)
   const container = useRef()
   const lens = useRef()
   const image = useRef()
   let partionImgMain = productDetail.img
   let partionImgFinally 
   const [getImg, setImg] = useState(0)  
   const getImgUrlOfElement = (e)=>{
        e.preventDefault()
        setImg(e.target.src)        
    }
   if(productDetail?.img?.length > 7){
    partionImgMain = productDetail.img?.slice(0,7)
    partionImgFinally=productDetail.img?.slice(7,productDetail.img.length)
   }
    return (
        <div className={style.containerSection}>
            <div className={style.subContainer}>
                {partionImgMain?.map((e,i)=>{
                    return <div onClick={()=>setRenderGalery(true)} className={(getImg === e.url || i === getImg) ? style.active : null} key={i}>
                                <img  className={style.img} onMouseOver={getImgUrlOfElement}  src={e.url}/>
                            </div>       
                })} 
                           {productDetail.img?.length > 7 && <div onClick={()=>setRenderGalery(true)} onMouseOver={getImgUrlOfElement} src={partionImgFinally ? partionImgFinally[0].url: null}>
                                <img className={style.img} src={partionImgFinally ? partionImgFinally[0].url: null} />
                                <p className={style.leftoverImages}><span>+{partionImgFinally?.length}</span></p>
                                <span className={style.containerleftoverImages}></span>
                            </div>}
            </div>
            <div onClick={()=>setRenderGalery(true)} ref={container} onMouseLeave={()=>desbledLens(lens)} onMouseMove={(e)=>getMousePosition(e,container,lens,image)} className={style.containerImg}>
                <img ref={image}  className={style.imgMain} src={!getImg ? productDetail.imgMain : getImg } />
                <div ref={lens} className={style.lens}></div>
            </div>
        </div>    
  )
}
