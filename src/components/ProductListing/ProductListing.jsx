import {useEffect} from 'react'
import {useParams}from'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {getAllProductsApiMercadoLibre} from '../../redux/slice/sliceProducts'
export default function ProductListing() {
    const dispatch = useDispatch();
    const allProducts = useSelector(state=>state.products.allProducts)
    const {name} = useParams()
    useEffect(()=>{
        dispatch(getAllProductsApiMercadoLibre(name))
    },[name])
  return (
    <div style={{minHeight:"80vh"}}>
        <ul>
            {allProducts?.map(e=>{
                return<li key={e.id}>
                        <img src={e.img}/>
                        <div>
                            <h4>{e.title}</h4>
                            <p>{e.price}</p>
                            <p>{e.condition}</p>
                        </div>
                      </li>
            })}
        </ul>
    </div>
  )
}
