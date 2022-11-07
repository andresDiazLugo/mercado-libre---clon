import {useState} from 'react'
import style from './GaleryPhotos.module.css'
import { useSelector} from 'react-redux'

export default function GaleryPhotos({setRenderGalery}) {
    const [indiceArray, setIndiceArray] = useState(1)
    const productDetail = useSelector(state => state.products.productDetail)
    const nextImg = ()=>{
        if(indiceArray >= productDetail.img?.length ){
            setIndiceArray(1)
        }else{
            setIndiceArray(indiceArray + 1)
        }
    }
    const backImg = ()=>{
            if(indiceArray <=1){
                setIndiceArray(productDetail.img?.length)
            }else{
                setIndiceArray(indiceArray - 1)
            }          
    }
  return (
    <div className={style.container}>
        <div className={style.containerElements}>
         <div className={style.subcontainer1}>
            <div><p>{indiceArray} / {productDetail.img?.length}</p></div>
            <button onClick={()=>setRenderGalery(false)}>X</button>
         </div>

         <div className={style.subcontainer2}>
            <button onClick={backImg}>{"<"}</button>
            <img src={productDetail.img[indiceArray-1].url}/>
            <button onClick={nextImg}>{">"}</button>
         </div>

        </div>

    </div>
  )
}
