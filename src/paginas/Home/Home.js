import React from 'react'
import Postit from '../../componentes/Postit/Postit'
import loading from './loading.gif'
import * as apiPostit from '../../apis/postits'
import './Home.css'


class Home extends React.Component {
    state = {
        postits: [],
        carregando: true
    }

    componentDidMount() {
        // TODO: buscar lista de postit
       // CHAMAR A AÇÃO QUE DISPARA O MOUNT 
    }

    adicionaPostit = (novoPostit) => {
        apiPostit.postPostit(novoPostit)
            .then(response => {
                this.setState(prevState => {
                    novoPostit.id = response.data.id
        
                    return {
                        postits: prevState.postits.concat(novoPostit)
                    }
                })
            })
    }

    editaPostits = (postitAlterado) => {
        apiPostit.putPostit(postitAlterado)
            .then(response => {
                this.setState(prevState => {
                    return {
                        postits: prevState.postits.map(
                            (itemDoArray) => {
                                if (itemDoArray.id === postitAlterado.id) {
                                    return postitAlterado
                                } else {
                                    return itemDoArray
                                }
                            }
                        )
                    }
                })
                // .catch(error => {
                //     alert(error.response.data.erro)
                // })

            })
    }


    removePostit = (idPostitRemovido) => {
        apiPostit.deletePostit(idPostitRemovido)
            .then(response => {
                this.setState(prevState => {
                    return {
                        postits: prevState.postits.filter(
                            postit => postit.id !== idPostitRemovido
                        )
                    }
                })
            })
    }

    render() {
        return (
            <div className="home">
                <Postit
                    onAdicionaPostitClick={this.adicionaPostit}
                    onEditaPostitClick={this.editaPostits}
                    onRemovePostitClick={this.removePostit}
                />
    
                <div className="home__lista">
                {
                    this.state.carregando ? (
                        <img src={loading} alt="Carregando lista de postit" />
                    ) : (
                        this.state.postits.map(postit => (
                            <Postit 
                                key={postit.id}
                                id={postit.id}
                                titulo={postit.titulo}
                                texto={postit.texto}
                                onAdicionaPostitClick={this.adicionaPostit}
                                onEditaPostitClick={this.editaPostits}
                                onRemovePostitClick={this.removePostit}
                            />
                        ))
                    )
                }
                </div>
            </div>
        )
    }
}

export default Home