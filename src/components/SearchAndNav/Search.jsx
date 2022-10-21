import React from 'react';
import style from './Search.module.css';
import {IoIosSearch} from 'react-icons/io'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
export default function Search() {
  return (
    <div >
        <div className={style.container}>
            <input className={style.input}  type="text" placeholder="Buscar productos, marcas y más..."/>
            <IoIosSearch className={style.incono} size="1.3rem" color='#333'/>
        </div>
                <ul className={style.ul}>
                    <li ><a className={style.enlaceArrow}>Categorías <MdOutlineKeyboardArrowDown style={{position:"absolute",bottom:"1"}}/></a></li>
                    <li><a>Ofertas</a></li>
                    <li><a>Historial</a></li>
                    <li><a>Supermercado</a></li>
                    <li><a>Moda</a></li>
                    <li><a>Vender</a></li>
                    <li><a>Ayuda</a></li>
                </ul>
    </div>
  )
}
