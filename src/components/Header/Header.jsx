import React from 'react'
import style from './Header.module.css'
import LogoDireccion from './LogoDireccion/LogoDireccion'
import Search from './SearchAndNav/Search'
import SesionXsubscripcion from './SesionAndSubscripciones/SesionXsubscripcion'


export default function Header() {
  return (
    <header className={style.header}>
        <div className={style.headerContainer}>
            <div>
                <LogoDireccion/>
            </div>
            <div>
                <Search/>
            </div>
            <div>
                <SesionXsubscripcion/>
            </div>
        </div>
    </header>
  )
}
