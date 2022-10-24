import React from 'react'
import style from './Info.module.css'


export default function Info() {
  return (
    <div className={style.containerMain}>
        <ul className={style.subcontainerUl1}>
            <li className={style.element1}>
                <img src='https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg'/>
                <h4>Elegí cómo pagar</h4>
                <div>
                <p>Podés pagar cin tarjeta, débito, efectivo 
                    o hasta 12 cuotas sin tarjeta con 
                    Mercado Crédito.
                </p>
                </div>
                <a className={style.enlaces} href='#'>Cómo pagar tus compras</a>
            </li>
            <li className={style.element2}>
            <img src='https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg'/>
                <h4>Envíos grasis desde $5.500</h4>
                <div>

                <p>Solo por estar registrado en Mercado 
                    Libre ten,es envíos gratis en miles de
                    productos. Es un beneficio de Mercado puntos.
                </p>
                </div>
                <a className={style.enlaces} href='#'>conocé más sobre este beneficio</a>
            </li>
            <li>
            <img src='https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg'/>
                <h4>Seguridad, de principio a fin</h4>
                <div>
                <p>¿No te gusta? ¡Devolvelo! En Mercado
                    Libre, no hay nada que no puedas
                    hacer, porque estás siempre protegido.
                </p>
                </div>
                <a className={style.enlaces} href='#'>Cómo te protegemos</a>
            </li>
        </ul>
        <ul className={style.subcontainerUl2}>
            <li>
                <p><span>Botón de arrepentimiento</span></p>

                    <p>Cancelar una compra</p>
                    <p>cancelar una suscripción</p>
                    <p>cancelar un seguro o garantía</p>

            </li>
            <li>
                <p><span>Conocé las normas que aplican cuando comprás</span></p>
                <p>Ver contratos de adhesión-Ley N.º 24.240 de defensa del consumidor</p>
            </li>
        </ul>
        <div className={style.containerDiv3}>
            <a><img src='https://http2.mlstatic.com/storage/homes-korriban/assets/images/insurance/ssnlogo.svg'/></a>
            <a><img src='https://http2.mlstatic.com/resources/sell/banner_usuarios_financieros.svg'/></a>
            <a><img src='https://http2.mlstatic.com/resources/frontend/web-homes/ui-dist/images/data-fiscal-6dc7613071.png'/></a>
        </div>
    </div>
  )
}
