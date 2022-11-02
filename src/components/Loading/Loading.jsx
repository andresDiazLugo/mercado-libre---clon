import React from 'react'
import style from './Loading.module.css'
export default function Loading() {
  return (
    <div className={style.container}>
        <img className={style.img1} src='https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/logo__large_plus.png'/>
        <img className={style.img2}  src='https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/logo__large_plus.png'/>
    </div>
  )
}
