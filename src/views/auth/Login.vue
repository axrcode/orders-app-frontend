<template>
    <h1>LOGIN</h1>
    
    <input type="email" v-model='usuario.email'>
    <input type="password" v-model='usuario.password'>

    <button @click="ingreso">
        Ingresar
    </button>
    {{ usuario }}

</template>

<script>
    import * as loginService from './../../services/login.service'

    export default {
        data() {
            return {
                usuario: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async ingreso() {
                const { data } = await loginService.login(this.usuario)
                console.log(data)
                
                if ( !data.error ) {
                    //  Codificamos el access_token
                    let base64 = Buffer.from(data.access_token).toString('base64')
                    //  Guardamos el token en el localStorage
                    localStorage.setItem('token', base64)
                }
            }
        }
    }
</script>

<style>

</style>