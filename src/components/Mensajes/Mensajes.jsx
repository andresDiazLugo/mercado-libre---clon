import React from 'react'
import style from './Mensajes.module.css'
export default function Mensajes() {
  return (
    <div className={style.container}>
        <div className={style.subContainer}>
            <img src='https://res.cloudinary.com/da76mkk4h/image/upload/v1666809599/lupa_dmap5s.png'/>
            <div>
                <h2>No hay publicaciones que coincidan con tu búsqueda.</h2>
                <ul className={style.subContainerUl}>
                    <li><span className={style.styleSpan}>Revisá la ortografía </span> de la palabra</li>
                    <li>Utlizá <span className={style.styleSpan}>palabras más genéricas</span> o menos palabras</li>
                    <li><span className={style.navega}>Navegá por las categorías</span>  para encontrar un producto simular</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
