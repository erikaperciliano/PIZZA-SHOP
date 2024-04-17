import { env } from '@/env'
import axios from 'axios'

export const api = axios.create({
    baseURL: env.VITE_API_URL,
    withCredentials: true,
})

//add delay of 2 second before the requests
if(env.VITE_ENABLE_API_DELAY){
    api.interceptors.request.use(async(config) => {
        await new Promise(resolve => setTimeout(resolve, 200))

        return config
    })
}