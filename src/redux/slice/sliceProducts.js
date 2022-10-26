import {createSlice} from '@reduxjs/toolkit'
import {getApi} from '../../services/GET'

const initialState={
    allProducts:[]
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
            }
        }
    }
)

export const {getAllProducts} = productSlice.actions

export const getAllProductsApiMercadoLibre = (name)=>{
    return async dispatch =>{
        const response = await getApi("https://api.mercadolibre.com/sites/MLA/search?q="+name)
        dispatch(getAllProducts(response.results))
    }
}


export default productSlice.reducer