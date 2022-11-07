import {useEffect} from 'react'
import Detail from './Detail/Detail'
import {getDetailProduct,getQuestion,getCatalogDetailSpecificProduct} from '../../redux/slice/sliceProducts'
import {getUser} from '../../redux/slice/sliceDetailUsers'
import {useParams}from'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import CardMain from './CardInfoProduct/CardMain'
import style from './DetailProduct.module.css'
import Loading from '../Loading/Loading'
import {changeTitleNameDom} from '../../services/TitlePageName'
import {deletDetailProduct} from '../../redux/slice/sliceProducts'

export default function DetailProduct({setRenderGalery}) {
  const {id,idUser,idCatalog} = useParams()
  const productDetail = useSelector(state => state.products.productDetail)
  const dispatch = useDispatch()
  changeTitleNameDom(productDetail.title)
  useEffect(()=>{
    dispatch(getDetailProduct(id))
    dispatch(getUser(idUser)) 
    dispatch(getQuestion(id))
    window.scroll({
      top:0
    })
    if(idCatalog !== null){
      dispatch(getCatalogDetailSpecificProduct(idCatalog))
    }
    return ()=>{
      dispatch(deletDetailProduct())
    }
  },[])

  if(!productDetail.img || !productDetail.title){
    return <div>
              <Loading/>
           </div>
  }
  return (
    <div className={style.container}>
        <Detail setRenderGalery={setRenderGalery}/>
        <CardMain/>
    </div>
  )
}
