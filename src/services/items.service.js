import { http } from './http.service'

export const indexItems = () => {
    return http.get(`/items`)
}

export const storeItems = ( item ) => {
    return http.post(`/items`, item)
}

export const showItems = ( id ) => {
    return http.get(`/items/${id}`)
}

export const updateItems = ( id, item ) => {
    return http.put(`/items/${id}`, item)
}

export const deleteItems = ( id ) => {
    return http.delete(`/items/${id}`)
}