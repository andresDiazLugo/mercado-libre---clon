import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import style from  './DetailOpinions.module.css'
import {useSelector,useDispatch} from 'react-redux'
import StartsVotation from '../../StarsVotation/StartsVotation'
import {getReview} from '../../../../redux/slice/sliceProducts'
import {RiStarSLine} from 'react-icons/ri'
import {AiOutlineLike} from 'react-icons/ai'
import {AiOutlineDislike} from 'react-icons/ai'

import { addLikes } from '../../../../redux/slice/sliceProducts';


export default function DetailOpinions() {
  const review = useSelector(state=>state.products.review)
  const dispatch = useDispatch()
  const {id} = useParams()
  
 useEffect(()=>{
  dispatch(getReview(id))
 },[])
  return (
    <div className={style.container}>
        <div className={style.title}><p>Opiniones del producto</p></div>
        <div className={style.containerElements}>
            <div className={style.subContainer1}>
              <div className={style.subContainerStar}>
                <p>{review.rating_average}</p>
                <div>
                  <StartsVotation size={"1.6rem"} star={review.rating_average}/>
                  <p className={style.calificaciones}>{review.reviews?.length} calificaciones</p>
                </div>
              </div>
                <div className={style.progress}>
                  <div>
                    <progress max="100" value={review?.rating_levels?.five_star}></progress>
                    <p>5<RiStarSLine/></p>
                  </div>
                  <div>
                    <progress max="100" value={review?.rating_levels?.four_star}></progress>
                    <p>4<RiStarSLine/></p>
                  </div>
                  <div>
                    <progress max="100" value={review?.rating_levels?.three_star}></progress>
                    <p>3<RiStarSLine/></p>
                  </div>
                  <div>
                    <progress max="100" value={review?.rating_levels?.two_star}></progress>
                    <p>2<RiStarSLine/></p>
                  </div>
                  <div>
                    <progress max="100" value={review?.rating_levels?.one_star}></progress>
                    <p>1 <RiStarSLine/></p>
                  </div>
                </div>
            </div>
            <div>
              <div className={style.subsubContainer}>
                <button>Ordernar</button>
                <button>Calificacion</button>
              </div>
              <ul className={style.subsubContainerUl}>
                {review.reviews?.map((e,i)=>{
                  return  <li key={i}>
                            <div className={style.subsubsubContainerDiv1}>
                              <StartsVotation size={"1.3rem"} star={e.rate}/>
                              <p>{e.date_created.split("T")[0]}</p>
                            </div>
                                <p>{e.content}</p>
                                <div className={style.subsubsubContainerDiv2}><button onClick={()=>dispatch(addLikes(e.id))}>Es útil <AiOutlineLike size="1rem"/> {e.likes}</button> <button><AiOutlineDislike size="1rem"/> {e.dislikes}</button></div>
                          </li>
                })}
              </ul>
            </div>
        </div>
    </div>
  )
}
