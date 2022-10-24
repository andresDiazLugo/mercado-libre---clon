import React from 'react'
import style from './Suscribite.module.css'
export default function Suscribite() {
  return (
    <section className={style.container}>
        <div className={style.encabezado}>
            <h2>Suscribite al nivel 6</h2>
            <div className={style.price}> 
                <div>
                 <p className={style.priceXline}>$1.499</p>
                </div>
                 <p><span>$499</span>/mes</p>
            </div>
        </div>
            <p className={style.titleBeneficios}>Conseguí los mejores beneficios en Mercado Libre</p>
        <ul className={style.containerUl}>
            <li><img src='https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/dplus.svg'/> <p>Disney+ sin cargo</p></li>
            <li><img src='https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/starplus.svg'/> <p>Star+ sin cargo</p></li>
            <li className={style.envios}><img src='https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png'/> <p>Envíos gratis y rápidos desde $ 5.500 y 45% Off en envíos de menos de $5.500</p></li>
        </ul>
        <div className={style.suscribite}>
            <button>Suscribite</button>
        </div>
    </section>
  )
}
