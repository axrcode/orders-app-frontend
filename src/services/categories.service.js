import { http } from './http.service'

export const indexCategories = () => {
    return http.get(`/categories`)
}

export const storeCategories = ( category ) => {
    return http.post(`/categories`, category)
}

export const showCategories = ( id ) => {
    return http.get(`/categories/${id}`)
}

export const updateCategories = ( id, category ) => {
    return http.put(`/categories/${id}`, category)
}

export const deleteCategories = ( id ) => {
    return http.delete(`/categories/${id}`)
}