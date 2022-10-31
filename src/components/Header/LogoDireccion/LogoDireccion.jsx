import React from 'react'
import logoMercadoLibre from '../../../assets/logo.png'
import {TfiLocationPin} from 'react-icons/tfi'
import {Link} from 'react-router-dom'
import style from './LogoDireccion.module.css'
export default function LogoDireccion() {
  return (
    <div>
        <div>
          <Link to="/">
            <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/logo__large_plus.png"/>
          </Link>
        </div>
        <div className={style.direction}>
            <TfiLocationPin color='rgba(0,0,0,.5)' size="27px"/>
            <p className={style.p}>Enviar a <span>Capital Federal</span></p>
        </div>
    </div>
  )
}
