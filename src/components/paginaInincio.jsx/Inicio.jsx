import React from 'react'
import Header from '../Header/Header'
import Carousel from '../Carousel/Carousel'
import InfoPagos from '../infoPagos/InfoPagos'
import Ofertas from '../Ofertas/Ofertas'
import Anuncios from '../anuncios/Anuncios'
import Descubri from '../anuncios/Descubri/Descubri'
import Info from '../Footer/Info/Info'
import Footer from '../Footer/Footer'
export default function Inicio() {
  return (
    <>
        {/* <Header/> */}
        <Carousel/>
        <InfoPagos/>
        {/* <Ofertas/> */}
        <Anuncios/>
        <Descubri/>
        <Info/>
        {/* <Footer/> */}
        {/* <Counter/> */}
    </>
  )
}
