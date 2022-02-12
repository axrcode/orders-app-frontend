import { http } from './http.service'

export const login = ( datos ) => {

    return http().post('/auth/login', datos)
}
