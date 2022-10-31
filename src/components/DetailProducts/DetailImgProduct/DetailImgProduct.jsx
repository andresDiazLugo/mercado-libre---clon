import {useState, useRef} from 'react';
import style from './DetailImgProduct.module.css';
import {useSelector} from 'react-redux'
import CardComprar from '../CardInfoProduct/CardComprar';
export default function DetailImgProduct() {
   const productDetail = useSelector(state => state.products.productDetail)
   let partionImgMain = productDetail.img
   let partionImgFinally 
   const [getImg, setImg] = useState()  
   const getImgUrlOfElement = (e)=>{
        e.preventDefault()
        setImg(e.target.src)
    }
   if(productDetail?.img?.length > 8){
    partionImgMain = productDetail.img?.slice(0,7)
    partionImgFinally=productDetail.img?.slice(6,productDetail.img.length)
   }
    return (
        <div className={style.containerSection}>
            <div className={style.subContainer}>
                {partionImgMain?.map((e,i)=>{
                    return <div key={i}>
                                <img className={style.img} onMouseOver={getImgUrlOfElement}  src={e.url}/>
                                
                            </div>       
                })} 
                           {productDetail.img?.length > 8 && <div onMouseOver={getImgUrlOfElement} src={partionImgFinally ? partionImgFinally[0].url: null}>
                                <img className={style.img} src={partionImgFinally ?partionImgFinally[0].url: null} />
                                <p className={style.leftoverImages}><span>+{partionImgFinally?.length}</span></p>
                                <span className={style.containerleftoverImages}></span>
                            </div>}
            </div>
            <div className={style.containerImg}>
                <img className={style.imgMain} src={!getImg ? productDetail.imgMain : getImg } />
            </div>
            {/* <div className={style.containerInfoProducto}>
                <h3>{productDetail.title}</h3>
                <p><span>({review.paging.total})</span></p>
                <p>{productDetail.price}</p>
                <a>ver los medios de pagos</a>
                <p>detalles del producto</p>

            </div> */}
        {/* <CardComprar/> */}
        </div>
    
  )
}
