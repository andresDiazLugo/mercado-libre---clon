import {createSlice} from '@reduxjs/toolkit'
import {getApi} from '../../services/GET'
const initialState = {
    value: 0, 
    allProducts:[],   
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state)=>{
            state.value += 1
        }, 
        getAllProducts : (state, action)=>{
            state.allProducts = action.payload
        }

    }
})


export const {increment,getAllProducts} = counterSlice.actions

export const getAllProductsApiMercadoLibre =()=>{
    return async dispatch=>{
        const response = await getApi("https://api.mercadolibre.com/items/MLA1133127501")
        dispatch(getAllProducts(response))
    }
}



export default counterSlice.reducer