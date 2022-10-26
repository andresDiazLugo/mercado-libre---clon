import axios from 'axios'

export const getApi = async(url)=>{
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        return "hubo un error en la respuesta"        
    }
}