import React from 'react'
import style from './InfoPagos.module.css'

export default function InfoPagos() {
  return (
    <section className={style.containerSection}>
        <div className={style.container} >
            <div className={style.elemetsPrincipal}>
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg"/>
                    <p>
                        <p>Tarjeta de crédito </p>
                        <p><span>Ver promociones bancarias</span></p>               
                    </p>    
        
            </div>
            <div className={style.elemetsPrincipal}>
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg"/>
                <p>
                    <p>Tarjeta de débito </p>
                    <p><span>Ver más</span></p>
                </p> 
            </div>
             <div className={style.elemetsPrincipal}>
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg"/>
                    <p>
                        <p>Cuotas sin tarjeta</p>
                        <p><span>Conocé Mercado Crédito</span></p>
                    </p>           
            </div>
            <div className={style.elementsFinals1}>
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg"/>
                    <p>
                        <p>Efectivo</p>
                        <p><span>Ver más</span></p>
                     </p>
            </div>
            <div className={style.elementsFinals2}>
                <img src='https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg'/>
            </div>
        </div>
        
    </section>
  )
}
