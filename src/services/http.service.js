import axios from 'axios'

export const http = () => {

    return axios.create({
        baseURL: 'http://localhost:8000/api',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }        
    })
}

export const httpFile = () => {

    return axios.create({
        baseURL: 'http://localhost:8000/api',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        }        
    })
}