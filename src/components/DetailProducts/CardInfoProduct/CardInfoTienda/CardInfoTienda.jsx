import {useState,useEffect} from 'react'
import style from './CardInfoTienda.module.css'
import {CiLocationOn} from 'react-icons/ci'
import {useSelector} from 'react-redux'
import {CiMedal} from'react-icons/ci'
export default function CardInfoTienda() {
    const users = useSelector(state=> state.users.users)
    const [color,setColor] = useState(["1_#EEEEEE","2_#EEEEEE","3_#EEEEEE","4_#EEEEEE","5_#EEEEEE"])
useEffect(()=>{
    let color = ["1_#FF0F0","2_#FFF5E8","3_#FFFCDA","4_#F1FDD7","5_#EDF8EE"]
    if(users?.seller_reputation?.level_id){
        const number = users?.seller_reputation?.level_id.split("_")
            color = color.map(elements=>{
            if(elements[0] === number[0]){
                return number[0]+"_"+number[1]
            }else{
                return elements
            }
        })
        setColor(color)
    }
},[users])
  return (
    <div className={style.container}>
        <div className={style.title}>
            <p>Información sobre el vendedor</p>
        </div>
        <div className={style.containerUbicacion}>
                {/* <CiLocationOn size="1.5rem"/> */}
                   <div>
                        <p>Ubicación</p>
                        {users.address && <p><span>{users.address.city}</span></p>}
                   </div>
        </div>
        <div className={style.level}>
                <CiMedal size="1.5rem" color="#00a650"/>
                <div>
                    <p>MercadoLíder {users?.seller_reputation?.power_seller_status}</p>
                    {users?.seller_reputation?.level_id !==null  ?
                    <p className={style.p}>¡Es uno de los mejores del sitio!</p>:null    
                }
                </div>
        </div>
        <div className={style.conatinerLevels}>
            {color.map(e=><div key={e} style={{backgroundColor:e.split("_")[1]}}  className={style.levelsRanking}></div>)}
        </div>
        {users?.seller_reputation?.level_id !== null &&
        <div className={style.ventas}>
            <div >
                <p><span>{users?.seller_reputation?.transactions?.completed}</span></p>
                <p>Ventas en los últimos 60 días</p>
            </div>
            <div>
                <img src='https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg'/>
                <p>Brinda buena atencion</p>
            </div>
            <div>
                <img src='https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg'/>
                <p>Despacha sus productos a tiempo</p>
            </div>
        </div>}
        <div className={style.link}>
                <a href={users?.permalink}>Ver más datos de este vendedor</a>
        </div>
    </div>
  )
}
