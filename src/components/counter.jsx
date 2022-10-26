import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getAllProductsApiMercadoLibre} from '../redux/slice/sliceProducts'

export default function counter() {
    // const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(getAllProductsApiMercadoLibre())}>Increment</button>
        {/* <span>{count}</span> */}
    </div>
  )
}
