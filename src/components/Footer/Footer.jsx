import {useState} from 'react';
import style from './Footer.module.css';
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'


export default function Footer() {
  const [ButtonActivate, setButton] = useState(false)
    return (
    <footer className={style.footer}>
        <button className={!ButtonActivate ? style.btn : style.btnActive} onClick={()=>setButton(!ButtonActivate)}>Más informacion {!ButtonActivate ? <MdOutlineKeyboardArrowUp size="16px"/>: <MdOutlineKeyboardArrowDown size="16px"/>}</button>
        {ButtonActivate && <div className={style.containerDiv}>
            <ul className={style.containerUl}>
                <li>
                    <h4>Acerca de</h4>
                    <a>Mercado Libre</a>
                    <a>Investor relations</a>
                    <a>Tendencias</a>
                    <a>Sustentabilidad</a>
                </li>
                <li>
                    <h4>Otros sitios</h4>
                    <a>Developers</a>
                    <a>Mercado Pago</a>
                    <a>Mercado Shops</a>
                    <a>Mercado Envíos</a>
                    <a>Mercado Ads</a>
                </li>
                <li>
                    <h4>Ayuda</h4>
                    <a>Comprar</a>
                    <a>Vender</a>
                    <a>Resolucíon de problemas</a>
                    <a>Centro de seguridad</a>
                </li>
                <li>
                    <h4>Redes Sociales</h4>
                    <a>Twitter</a>
                    <a>Facebook</a>
                    <a>Instagram</a>
                    <a>Youtube</a>
                </li>
                <li>
                    <h4>Mi cuenta</h4>
                    <a>Ingresa</a>
                    <a>Vender</a>
                </li>
                <li>
                    <h4>Mercado Puntos</h4>
                    <a>Nivel 6</a>
                    <a>Disney+</a>
                    <a>Star+</a>
                    <a>HBO MAX</a>
                    <a>Paramount+</a>
                </li>  
            </ul>
        </div>}
        <div className={style.containerInfo}>
            <a href='#'>Trabajá con nosotros</a>
            <a href='#'>Términos y condiciones</a>
            <a href='#'>Cómo cuidamos tu privacidad</a>
            <a href='#'>Accesibilidad</a>
            <a href='#'>Información al usuario financiero</a>
            <a href='#'>Ayuda</a>
            <a href='#'>Defensa del Consumidor</a>
            <a href='#'>Información sobre seguros</a>
        </div>
    </footer>
  )
}
