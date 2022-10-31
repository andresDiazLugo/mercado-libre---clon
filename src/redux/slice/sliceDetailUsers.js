import {createSlice} from '@reduxjs/toolkit';
import { getApi } from '../../services/GET';

const initialState = {
    users:{}
}

const userSlice = createSlice(
    {
        name:"users",
        initialState,
        reducers:{
            getUsers : (state,action)=>{
                state.users = action.payload
            }
        }
    }
)

const {getUsers} = userSlice.actions

export const getUser = (idUser)=>{
    return async dispatch =>{
        const response = await getApi(`/users/${idUser}`)
        dispatch(getUsers(response))
    }
}
export default userSlice.reducer