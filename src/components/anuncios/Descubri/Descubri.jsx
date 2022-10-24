import React from 'react'
import style from './Descubri.module.css'
export default function Descubri() {
  return (
    <section className={style.containerSection}>
        <div className={style.title}>
            <p>Descubrí</p>
        </div>
        <div className={style.containerInfo}>
            <div className={style.subcontainer} >
                <div className={style.containerInfo1}>
                  <p className={style.subTitle}>REFRIGERACION</p>
                  <p><span>HASTA 20% OFF</span></p>
                  <p><span>Y 12X SIN INTERÉS</span></p>
                  <button>Ver más</button>
                </div>
                <img src='https://http2.mlstatic.com/D_NQ_672657-MLA51966548817_102022-C.webp'/>
            </div>
            <div className={style.subcontainer}>
                <div className={style.containerInfo1}>
                  <p className={style.subTitle}>¡CALENTÁ MOTORES!</p>
                  <p><span>HASTA 40% OFF</span></p>
                  <p><span>Y 12X SIN INTERÉS</span></p>
                  <button>Ver más</button>
                </div>
                <img src='https://http2.mlstatic.com/D_NQ_919109-MLA51163280375_082022-C.webp'/>
            </div>
        </div>
    </section>
  )
}
