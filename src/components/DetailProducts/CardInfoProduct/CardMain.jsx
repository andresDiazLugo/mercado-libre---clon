import React from 'react'
import CardComprar from './CardComprar/CardComprar'
import CardInfoTienda from './CardInfoTienda/CardInfoTienda'
import MediosPagos from './MediosPagos/MediosPagos'
import style from './CardMain.module.css'

export default function CardMain() {
  return (
    <section className={style.containerMain}>
        <CardComprar/>
        <CardInfoTienda/>
        <MediosPagos/>
    </section>
  )
}
