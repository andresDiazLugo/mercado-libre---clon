import {useEffect} from 'react'
import {useParams,useNavigate}from'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {getAllProductsApiMercadoLibre} from '../../redux/slice/sliceProducts'
import style from './ProductListing.module.css'
import {convertARS}from './convertARS'
import {getDetailProduct,deletAll} from '../../redux/slice/sliceProducts'
import Mensajes from '../Mensajes/Mensajes'
import {deleteSymbolSlash} from '../../services/DeleteSymbolSlash'
import Loading from '../Loading/Loading'
export default function ProductListing() {
    const dispatch = useDispatch();
    const allProducts = useSelector(state=>state.products.allProducts)
    const msgError = useSelector(state => state.products.msgError)
    const {name} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(getAllProductsApiMercadoLibre(name))
        return()=>{
            dispatch(deletAll())
        }
    },[])

    if(msgError){
      return(
        <Mensajes/>
      )
    }
    const goPathDetail = (e,idProduct,idUser,idCatalog)=>{
      e.preventDefault()
      // dispatch(getDetailProduct(idProduct))
      // setTimeout(()=>{
        navigate(`/allProducts/${name}/detailProducts/${idProduct}/${idUser}/${idCatalog}`)

      // },2000)
    }
    if(allProducts.length=== 0){
      return <div>
                <Loading/>
            </div>
    }
  return (
   <div className={style.container}>
        <ul>
            {allProducts?.map(element=>{
                       return <li key={element.id}  className={style.containerLi} onClick={(e)=>goPathDetail(e,element.id,element.idUser,element.catalogProduct)}>
                                    <img src={element.img}/>
                                    <div >
                                        <h4>{element.title}</h4>
                                        <p className={style.price}>{"$ " + convertARS(element.price)}</p>
                                        {element.shipping && <p className={style.envio}>Envío gratis</p>}
                                        <p className={style.condition}>{element.condition === "new" ? "Nuevo": "Usado"}</p>
                                    </div>
                               </li>
                          
            })}
        </ul>
     </div>
  )
}
// to={`/allProducts/${name}/detailProducts/${deleteSymbolSlash(e.title)}/${e.id}/${e.idUser}