import {useEffect} from 'react'
import DetailImgProduct from './DetailImgProduct/DetailImgProduct'
import {getDetailProduct,getReview,getQuestion,getDescription,getCatalogDetailSpecificProduct} from '../../redux/slice/sliceProducts'
import {getUser} from '../../redux/slice/sliceDetailUsers'
import {useParams}from'react-router-dom'
import {useDispatch} from 'react-redux'
import CardComprar from './CardInfoProduct/CardComprar'
import style from './DetailProduct.module.css'
export default function DetailProduct() {
  const {id,idUser,idCatalog} = useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getDetailProduct(id))
    dispatch(getUser(idUser))
    dispatch(getReview(id))
    dispatch(getQuestion(id))
    dispatch(getDescription(id))
    if(idCatalog !== null){
      dispatch(getCatalogDetailSpecificProduct(idCatalog))
    }
  },[])
  return (
    <div className={style.container}>
        <DetailImgProduct />
        <CardComprar/>
    </div>
  )
}
