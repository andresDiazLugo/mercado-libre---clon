import React from 'react'
import {BsTrophy} from 'react-icons/bs'
import {SlBadge} from 'react-icons/sl'
import {HiOutlineShieldCheck} from 'react-icons/hi'
import {AiOutlineHeart} from 'react-icons/ai'
import {MdLocalShipping} from 'react-icons/md'
import {TbArrowBack} from 'react-icons/tb'
import {useSelector} from 'react-redux'
import StartsVotation from '../../StarsVotation/StartsVotation'
import {convertARS} from '../../../../components/ProductListing/convertARS'
import style from './CardComprar.module.css'
export default function CardComprar() {
    const productDetail = useSelector(state => state.products.productDetail)
    const review = useSelector(state => state.products.review)
    return (
    <div className={style.subContainer}>
            <p className={style.condition}>{productDetail.condition === "new" && "Nuevo"}</p>
        <div className={style.title}>
            <h3 className={style.titleProduct}>{productDetail.title}</h3>
            <AiOutlineHeart className={style.Heart} size="2.4rem"  color="#3483fa"/>
        </div>
       { review.paging?.total? <div className={style.subContainerStar}>
            <StartsVotation size={"1.2rem"}/> 
           <p className={style.total}>({review.paging?.total})</p>
        </div>: null}
        <div className={style.price}>
            <p>${convertARS(productDetail.price)}</p>
            <a href='#'>Ver los medios de pagos</a>
        </div>
       { productDetail.shipments &&<div className={style.shipping}>
            <div>
                <MdLocalShipping size="1.6rem" color="#00a650"/>
                <p>Envio gratis</p>
            </div>
            <a href='#'>Ver más formas de entrega</a>
        </div>}
        <div className={style.devolution}>
            <div>
                <TbArrowBack size="1.6rem" color="#00a650"/>
                <p>Devolución gratis</p>
            </div>
            <p>Tenés 30 días desde que lo recibís</p>
            <a href='#'>Conocer más</a>
        </div>
        <div className={style.operationCompras}>
         {productDetail.quantity > 0 && <p className={style.stock}>Stock disponible</p>}
         <p className={style.cantidad}>Cantidad: <span className={style.unidad}> 1 unidad  </span> <span className={style.disponibles}> ({productDetail.quantity}) disponibles</span></p>
         <p className={style.disponibles}>Podés comprar solo 1 unidad</p>
            <div>
                <button className={style.comprar}>Comprar ahora</button>
                <button className={style.agregar}>Agregar al carrito</button>
            </div>
        </div>
        <div className={style.infoCompras}>
            <div>
                <HiOutlineShieldCheck color="#0000008C" size="2rem"/>
                <p><span>Compra Protegida</span>, recibí el Producto que esperabaas o te devolvemos tu dinero.</p>
            </div>
            <div>
                <BsTrophy color="#0000008C" size="1rem"/>
                <p><span>Mercado Puntos</span>. Sumás 3570 puntos.</p>
            </div>
            <div>
                <SlBadge color="#0000008C" size="1rem"/>
                <p>12 meses de grantía de fábrica</p>
            </div>
        </div>
        <div className="portionImgProduct">

        </div>
    </div>
  )
}
