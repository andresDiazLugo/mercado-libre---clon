import axios from 'axios'
const api = import.meta.env.VITE_APP_API_URL
export const getApi = async(url)=>{
    try {
        const response = await axios.get(api+url)
        return response.data
    } catch (error) {
        console.error(error)
        return "hubo un error en la respuesta"        
    }
}