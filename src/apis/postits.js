import protocolo from './configuracao'

// URL deve ser pedida ao back end

export function getPostits() {
    const url = '/postits'
    return protocolo.get(url)
}

// Cadastrar Postit
// json será oq o back definir

export function postPostit(novoPostit){
    const url = './postits'
    const json = {
        titulo: novoPostit.titulo,
        texto: novoPostit.texto
    }
    return protocolo.post(url, json)
}

// Altera Post it

export function putPostit(postitAlterado) {
    const url = `/postit/${postitAlterado.id}`
    const json = {
        titulo: postitAlterado.titulo,
        texto: postitAlterado.texto
        }
    return protocolo.put(url, json)
}

// Remove Post it

export function deletePostit(idPostitRemovido) {
    const url = `/postit/${idPostitRemovido}`

    return protocolo.delete(url)
}