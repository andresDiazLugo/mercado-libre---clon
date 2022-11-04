import React from 'react';
import style from './Beneficios.module.css';


export default function Beneficios() {
  return (
    <section className={style.containerSection}>
        <div className={style.container1}><p>Beneficios de MercadoPuntos <span>Ver todos los beneficios</span></p></div>
        <div className={style.container2}>
            <div className={style.subcontainer1}>
                <img src='https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/comboplus-square.jpg'/>
                <div>
                    <p><span>Sin cargo con el nivel 6</span></p>
                    <p>Disney+ y Star+</p>
                </div>
            </div>
            <div className={style.subcontainer2}>
                <img src='https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1'/>
                <div>
                    <p>7 DÍAS GRATIS</p>
                    <p><span>Hasta 50% OFF</span></p>
                    <p>HBO Max</p>
                </div>
            </div>
            <div className={style.subcontainer3}>
                <img src='https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@3x.png'/>

                    <div>
                        <p>7 DíAS GRATIS</p>
                        <p><span>Hasta 50% OFF</span></p>
                        <p>Paramiunt+</p>        
                    </div>
            </div>
        </div>

        <div className={style.container3}>
            <div className={style.ImgPortion}>
                <img className={style.imgPortion1} src='https://http2.mlstatic.com/D_NQ_665297-MLA51443063735_092022-OO.jpg'/>
                <img className={style.imgPortion2} src='https://http2.mlstatic.com/D_NQ_844168-MLA51443063649_092022-OO.jpg'/>
            </div>
            <div className={style.InfoPortion}>
                <p className={style.wordSpace}>SÓLO POR HOY</p>
                <p><span>OFERTAS Y HASTA</span></p>
                <p><span>12 CUOTAS SIN INTERÉS</span></p>
                <p>Ver más  {">"}</p>
            </div>
        </div>

    </section>
  )
}
