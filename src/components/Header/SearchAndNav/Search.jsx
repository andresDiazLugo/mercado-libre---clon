import {useRef,useState} from 'react';
import style from './Search.module.css';
import {IoIosSearch} from 'react-icons/io'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { BsMenuUp } from 'react-icons/bs';
import {useNavigate} from 'react-router-dom'

export default function Search() {
    const inputRef= useRef();
    const navigate = useNavigate();
    const SendValueInput =(e)=>{
      e.preventDefault()
      const valueInputInSeacrch = inputRef.current.value;
      navigate("/allProducts/"+valueInputInSeacrch);
      inputRef.current.value = "";
    } 
  return (
    <div >
        <form onSubmit={SendValueInput} className={style.container}>
            <input ref={inputRef} className={style.input}  type="text" placeholder="Buscar productos, marcas y más..."/>
          
               <IoIosSearch onClick={SendValueInput} className={style.incono} size="1.3rem" color='#333'/>
            
        </form>
                <ul className={style.ul}>
                    <li ><a className={style.enlaceArrow}>Categorías <MdOutlineKeyboardArrowDown style={{position:"absolute",bottom:"1"}}/></a></li>
                    <li><a>Ofertas</a></li>
                    <li><a>Historial</a></li>
                    <li><a>Supermercado</a></li>
                    <li><a>Moda</a></li>
                    <li><a>Vender</a></li>
                    <li><a>Ayuda</a></li>
                </ul>
    </div>
  )
}
