import React from 'react'
import style from './SesionXsubscripcion.module.css'
import {BsCart2} from 'react-icons/bs'
export default function SesionXsubscripcion() {
  return (
    <div>
        <img className={style.img} src='https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp'/>
        <ul className={style.containerUl}>
            <li><a>Creá tu cuenta</a></li>
            <li><a>Ingresá</a></li>
            <li><a>Mis compras</a></li>
            <BsCart2 cursor="pointer" color='#333' size="20px"/>
        </ul>
    </div>
  )
}
