import axios from 'axios'

const configuracoes = {   
        baseURL: 'https://reprograma-postit-api.heroku.com/',
        timeout: 1000,
}

const usuario = JSON.parse(localStorage.getItem('usuario'))

if (usuario) {
    configuracoes.headers = {
        'Authorization': usuario.token
    }
}

const protocoloHTTP = axios.create(configuracoes)

export default protocolo