import {useEffect} from 'react'
import Detail from './Detail/Detail'
import {getDetailProduct,getReview,getQuestion,getCatalogDetailSpecificProduct} from '../../redux/slice/sliceProducts'
import {getUser} from '../../redux/slice/sliceDetailUsers'
import {useParams}from'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import CardMain from './CardInfoProduct/CardMain'
import style from './DetailProduct.module.css'
import Loading from '../Loading/Loading'
import {changeTitleNameDom} from '../../services/TitlePageName'
export default function DetailProduct() {
  const {id,idUser,idCatalog} = useParams()
  const productDetail = useSelector(state => state.products.productDetail)
  const dispatch = useDispatch()
  changeTitleNameDom(productDetail.title)
  useEffect(()=>{
    dispatch(getDetailProduct(id))
    dispatch(getUser(idUser))
    dispatch(getReview(id))
    dispatch(getQuestion(id))
    window.scroll({
      top:0
    })
    if(idCatalog !== null){
      dispatch(getCatalogDetailSpecificProduct(idCatalog))
    }
  },[])

  if(!productDetail.img || !productDetail.title){
    return <div>
              <Loading/>
           </div>
  }

  return (
    <div className={style.container}>
        <Detail/>
        <CardMain/>
    </div>
  )
}
