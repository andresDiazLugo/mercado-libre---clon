import React from 'react'
import { useSelector } from 'react-redux'
import style from './DetailDescription.module.css'
export default function DetailDescription() {
   const productDetail = useSelector(state => state.products.productDetail)
  return (
    <>
    {productDetail.description && 
    <div className={style.container}>
         <div className={style.div}>
            <p className={style.title}>Descripción</p>
        </div>
     
        <div className={style.subContainer2}>
            <p>{productDetail.description}</p>
        </div>
     </div>
     }
    </>
  )
}
