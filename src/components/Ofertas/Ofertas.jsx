import React from 'react';
import {ofertas} from './arrayOfertas';
import style from './Ofertas.module.css';

export default function Ofertas() {
  return (
    <section className={style.containerSection}>
        <div>
          <h2 style={{marginLeft:"2.5rem",fontWeight:"100",fontFamily:"proximanovaLigth",color:"rgba(0, 0, 0, 0.5)"}}>Ofertas  <span> Ver todas</span></h2>
        </div>
        <ul className={style.containerUl}>
        {ofertas?.map(e=>{
            return<li key={e.id}>
                    <img src={e.img}/>
                    <div>
                        <h2>{e.price}  <span>{e.discount}</span></h2>
                        <p>{e.discountBytarjet}</p>
                        <h3>{e.envio}</h3>
                    </div>
                  </li> 
        })}
        </ul>
    </section>
  )
}
