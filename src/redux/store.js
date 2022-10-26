import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from './slice/sliceProducts'

export const store = configureStore({
  reducer: {
    // counter:counterReducer,
    products:ProductsReducer
  },
})


