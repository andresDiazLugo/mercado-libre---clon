import {useEffect} from 'react'
import {useParams}from'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {getAllProductsApiMercadoLibre} from '../../redux/slice/sliceProducts'
import style from './ProductListing.module.css'
import {convertARS}from './convertARS'
import Mensajes from '../Mensajes/Mensajes'
export default function ProductListing() {
    const dispatch = useDispatch();
    const allProducts = useSelector(state=>state.products.allProducts)
    const msgError = useSelector(state => state.products.msgError)
    const {name} = useParams()
    useEffect(()=>{
        dispatch(getAllProductsApiMercadoLibre(name))
    },[name])

    if(msgError){
      return(
        <Mensajes/>
      )
    }
    
  return (
   <div className={style.container}>
        <ul>
            {allProducts?.map(e=>{
                return<li className={style.containerLi} key={e.id}>
                        <img src={e.img}/>
                        <div >
                            <h4>{e.title}</h4>
                            <p className={style.price}>{"$ " + convertARS(e.price)}</p>
                            {e.shipping && <p className={style.envio}>Envío gratis</p>}
                            <p className={style.condition}>{e.condition === "new" ? "Nuevo": "Usado"}</p>
                        </div>
                      </li>
            })}
        </ul>
  </div>
  )
}
