import {createSlice} from '@reduxjs/toolkit'
import {getApi} from '../../services/GET'

const initialState={
    allProducts:[],
    msgError : false,
    productDetail:{},
    review:{},
    question:[]
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
                    img: action.payload.response.pictures.map(e=>({url:e.url})),
                    imgMain:action.payload.response.pictures[0].url || action.payload.thumbnail,
                    title:action.payload.response.title,
                    condition:action.payload.response.condition,
                    nameProperty:null,
                    price:action.payload.response.price,
                    quantity:action.payload.response.available_quantity,
                    listPropertyProduct:null,
                    property:action.payload.response.attributes.map(e=>({name:e.name,value:e.value_name})),
                    shipments: action.payload.response.shipping.free_shipping,
                    description:action.payload.plain_text            
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
                state.question= action.payload.map(e=>{
                    return{
                        question:e.text,
                        response:!e.answer ? "" :e.answer.text,
                        date:!e.answer ? "" :e.answer.date_created,
                    }
                }).filter(elements => elements.response !=="")
            },
            createQuestions:(state,action)=>{
                state.question=[
                    action.payload,
                    ...state.question,
                ]
            },
            deletDetailProduct: (state)=>{
                state.productDetail={},
                state.question=[],
                state.review={}
            },
            likes: (state,action)=>{
                
                alert("entrando")
                state.review= {
                    ...state.review,
                    reviews: reviews.map(e=>{
                        if(action.payload === e.id){
                            return {
                                ...e,
                                likes: "sssssss"
                            }
                    }else{
                                e
                    }
                    })
                }
            }
        }
    }
)

export const {getAllProducts,msgError,detailProduct,review,question,description,listProperty,createQuestions,deletDetailProduct,likes} = productSlice.actions

export const getAllProductsApiMercadoLibre = (name)=>{
    return async dispatch =>{
        const response = await getApi("/sites/MLA/search?q="+name)
        // const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q="+name).then(data=>data.json())
        // console.log("este es el response",response)
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
        const {plain_text} = await getApi(`/items/${id}/description`)
        dispatch(detailProduct({plain_text,response}))
    }
}

export const getCatalogDetailSpecificProduct = (idCatalog)=>{
   return async dispatch=>{
    const {main_features} = await getApi(`/products/${idCatalog}`)
    dispatch(listProperty(main_features))
   }
} 
// export const getDescription = (id)=>{
//     return async dispatch=>{
//         const {plain_text} = await getApi(`/items/${id}/description`)
//         console.log(plain_text)
//         dispatch(description(plain_text))
//     }
// } 
export const getReview = (id)=>{
    return async dispatch =>{
        const response = await getApi(`/reviews/item/${id}`)
        dispatch(review(response))
    }

}

export const getQuestion = (id)=>{
    return async dispatch =>{
        
        const {questions} = await getApi(`/questions/search?item=${id}`)
        dispatch(question(questions))
    }
}

export const createQuestion = (question)=>{
    return dispatch =>{
            dispatch(createQuestions(question))
    }
}
export const addLikes = (id)=>{
    return dispatch =>{
        dispatch(likes(id))
    }
}


export default productSlice.reducer