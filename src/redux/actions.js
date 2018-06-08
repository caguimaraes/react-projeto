import { push } from 'react-router-redux'
import * as apiLogin from '../apis/usuarios'
import * as apiPostit from '.'

// AÇÕES DO USUARIO

function disparaAcaoLogaUsuario(usuario) {
    return dispatch => {
        apiLogin.postUsuario(usuario).then(response => {
            const usuarioRespondido = response.data.usuario
            localStorage.setItem('usuario', JSON.stringify(usuarioRespondido))

            // this.props.onEnviarClick()
            dispatch({
                type: 'LOGA_USUARIO',
                payLoad: {
                    usuario: usuarioRespondido
                }
            })
            dispatch(push('/'))
        })
            .catch(error => {
                alert(error.response.data.erro)
            })
    }
}

function disparaAcaoDeslogaUsuario() {
    return dispatch => {
        localStorage.removeItem('usuario')

        dispatch({
            type: 'DESLOGA_USUARIO'
        })
    }
}

// AÇOES DO POST IT 

function disparaAcaoListaPosits() {
    return dispatch => {
        apiPostit.getPostits()
            .then(response => {
                this.setState({
                    postits: response.data.postits,
                    carregando: false
                })
            })
            .catch(error => {
                alert(error.response.data.erro)
            })
    }
}