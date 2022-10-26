import {createSlice} from '@reduxjs/toolkit'
import {getApi} from '../../services/GET'

const initialState={
    allProducts:[],
    msgError : false
}

 const productSlice = createSlice(
    {
        name:"products",
        initialState,
        reducers:{
            getAllProducts:(state,action)=>{
                state.allProducts= action.payload.map(e=>{
                    return {
                        id:e.id,
                        title:e.title,
                        price:e.price,
                        img:e.thumbnail,
                        shipping:e.shipping.free_shipping,
                        condition:e.condition
                    }
                })
            },
            msgError:(state,action)=>{
                state.msgError = action.payload
            }
        }
    }
)

export const {getAllProducts,msgError} = productSlice.actions

export const getAllProductsApiMercadoLibre = (name)=>{
    return async dispatch =>{
        const response = await getApi("https://api.mercadolibre.com/sites/MLA/search?q="+name)
        if(!response.results.length){
               dispatch(msgError(true))
        }else{
            dispatch(msgError(false))
        }
        dispatch(getAllProducts(response.results))
    }
}


export default productSlice.reducer