import React from 'react'
import style from './MediosPagos.module.css'
export default function MediosPagos() {
  return (
    <div className={style.container}>
        <div className={style.subcontainerTitle}>
            <p>Medios de pago</p>
        </div>
        <div className={style.subcontainerSinTarjert}>
            <p>Hasta 12 cuotas sin tarjeta</p>
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg'/>
        </div>
        <div className={style.subcontainerTarjetaCredito}>
            <p>Tarjeta de crédito</p>
            <p><span>¡Cuotas sin interés con bancos seleccionados!</span></p>
        </div>
        <div className={style.subContainerImgTarjetas}>
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg'/>
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg'/>
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg'/>
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg'/>
        </div>
        <div>
            <p>Tarjetas de débito</p>
        </div>
        <div className={style.subContainerImgTarjetas}>
            <img src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg"/>
            <img src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg"/>
            <img src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg"/>
            <img src='https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg'/>
        </div>
        <div className={style.link}>
            <a href='#'>Conocé otros medios de pago</a>
        </div>
    </div>
  )
}
