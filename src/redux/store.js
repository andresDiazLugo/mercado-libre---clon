import { configureStore} from '@reduxjs/toolkit'
import ProductsReducer from './slice/sliceProducts'
import UsersReducer from './slice/sliceDetailUsers'
export const store = configureStore({
  reducer: {
    products:ProductsReducer,
    users: UsersReducer, 
  }
})


