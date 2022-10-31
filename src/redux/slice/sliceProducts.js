import {createSlice} from '@reduxjs/toolkit'
import {getApi} from '../../services/GET'




const initialState={
    allProducts:[],
    msgError : false,
    productDetail:{},
    review:{},
    question:{}
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
                        condition:e.condition,
                        idUser:e.seller.id,
                        catalogProduct:e.catalog_product_id
                    }
                })
            },
            msgError:(state,action)=>{
                state.msgError = action.payload
            },
            detailProduct:(state,action)=>{
                state.productDetail = {
                    img: action.payload.pictures.map(e=>({url:e.url})),
                    imgMain:action.payload.pictures[0].url || action.payload.thumbnail,
                    title:action.payload.title,
                    condition:action.payload.condition,
                    nameProperty:null,
                    price:action.payload.price,
                    quantity:action.payload.available_quantity,
                    listPropertyProduct:null,
                    property:action.payload.attributes.map(e=>({name:e.name,value:e.value_name})),
                    description:null,
                    shipments: action.payload.shipping.free_shipping             
                }
            },
                listProperty:(state,action)=>{
                state.productDetail ={
                    ...state.productDetail,
                    listPropertyProduct:action.payload
                }
            },
            review:(state,action)=>{
                state.review= action.payload
            },
            question:(state,action)=>{
                state.question= action.payload
            },
            description:(state,action)=>{
                state.productDetail={
                    ...state.productDetail,
                    description:action.payload
                }
            }
        }
    }
)

 const {getAllProducts,msgError,detailProduct,review,question,description,listProperty} = productSlice.actions

export const getAllProductsApiMercadoLibre = (name)=>{
    return async dispatch =>{
        const response = await getApi("/sites/MLA/search?q="+name)
        if(!response.results.length){
               dispatch(msgError(true))
        }else{
            dispatch(msgError(false))
        }
        dispatch(getAllProducts(response.results))
    }
}

export const getDetailProduct = (id)=>{
    return async dispatch=>{
        const response = await getApi(`/items/${id}`)
        dispatch(detailProduct(response))
    }
}

export const getCatalogDetailSpecificProduct = (idCatalog)=>{
   return async dispatch=>{
    const {main_features} = await getApi(`/products/${idCatalog}`)
    console.log(main_features)
    dispatch(listProperty(main_features))
   }
} 
export const getDescription = (id)=>{
    return async dispatch=>{
        const {plain_text} = await getApi(`/items/${id}/description`)
        dispatch(description(plain_text))
    }
} 
export const getReview = (id)=>{
    return async dispatch =>{
        const response = await getApi(`/reviews/item/${id}`)
        dispatch(review(response))
    }
}

export const getQuestion = (id)=>{
    return async dispatch =>{
        const response = await getApi(`/questions/search?item=${id}`)
        dispatch(question(response))
    }
}


export default productSlice.reducer