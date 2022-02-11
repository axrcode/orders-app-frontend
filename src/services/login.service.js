import { http } from './http.service'

export async const login = ( datos ) => {

    return http().post('/login', datos)
}
