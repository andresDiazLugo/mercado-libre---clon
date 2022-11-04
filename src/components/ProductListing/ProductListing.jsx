import {useEffect,useState} from 'react'
import {useParams,useNavigate}from'react-router-dom'
import {getApi} from '../../services/GET'
import style from './ProductListing.module.css'
import {convertARS}from './convertARS'
import {changeTitleNameDom} from '../../services/TitlePageName'
import Mensajes from '../Mensajes/Mensajes'
import Loading from '../Loading/Loading'
export default function ProductListing() {
    const [msgError, setMsgError] = useState(false);
    const [allProducts, setProducts] = useState([]);
    const {name} = useParams();
    const navigate = useNavigate();
    changeTitleNameDom(name)
    useEffect(()=>{
      (async function(){
        let response = await getApi("/sites/MLA/search?q="+name)
          if(!response.results.length){
            setMsgError(true)
          }else{
            response = response.results.map(elements=>{
              return{
                id:elements.id,
                title:elements.title,
                price:convertARS(elements.price),
                img:elements.thumbnail,
                shipping:elements.shipping.free_shipping,
                condition:elements.condition,
                idUser:elements.seller.id,
                catalogProduct:elements.catalog_product_id
              }
            })
            setProducts(response)
            setMsgError(false)
          }
        })()
        return()=>{
            setProducts([])
        }
    },[name])

    if(msgError){
      return(
        <Mensajes/>
      )
    }
    const goPathDetail = (idProduct,idUser,idCatalog)=>{
        navigate(`/allProducts/${name}/detailProducts/${idProduct}/${idUser}/${idCatalog}`)
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
                       return <li key={element.id}  className={style.containerLi} onClick={()=>goPathDetail(element.id,element.idUser,element.catalogProduct)}>
                                    <img src={element.img}/>
                                    <div >
                                        <h4>{element.title}</h4>
                                        <p className={style.price}>{"$ " + element.price}</p>
                                        {element.shipping && <p className={style.envio}>Envío gratis</p>}
                                        <p className={style.condition}>{element.condition === "new" ? "Nuevo": "Usado"}</p>
                                    </div>
                               </li>
                          
            })}
        </ul>
     </div>
  )
}

