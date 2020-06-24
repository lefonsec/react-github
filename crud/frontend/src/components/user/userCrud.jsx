import React,{ Component } from 'react'
import Main from '../templete/Main'
import Axios from 'axios'

const headerProsp ={
    icon: 'users',
    title: 'Usuários',
    subtitle:'Cadastro de Usuario: Incluir,Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3006/users'
const inicialState = {
   user: { name: '' , email: ''},
   list: [] 
}

export default class userCrud extends Component{
    state = {...inicialState}
    clear(){
        this.setState({user: inicialState.user})
    }
    save(){
        const user = this.state.user
        const method = user.id ? 'put': 'post'
        const url = user.id ? `${baseUrl}/${user.id}`: baseUrl
        Axios[method](url,user)
        .then(resp=>{
            const list = this.getUpadteList(resp.data)
            this.setState({user:inicialState.user,list})
        })
    }
    getUpadteList(){
        //const list = this.state.list.filter(u=> u.id !== user.id)
        //list.unshift(user)
       // return list
    }
    updateField(event){
        const user = {...this.state.user}
        user[event.target.name]=event.target.value
        this.setState({ user })

    }
    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="name"value={this.state.user.name}
                            onChange={e=>this.updateField(e)}
                            placeholder="digite o nome"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                            name="email"
                            value={this.state.user.email}
                            onChange={e=>this.updateField(e)}
                            placeholder="digite o email"/>
                        </div>
                    </div>
                </div>
                    <hr/>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary" onClick={e=> this.save(e)}>salvar
                            </button>
                            <button className="btn btn-secundary ml-2" onClick={e=>this.clear(e)}>
                                Cancelar
                            </button>
                        </div>
                    </div>
            </div>
        )
    }
    render(){
        return(
            <Main {...headerProsp}>
               {this.renderForm()}
            </Main>
        )
    }
}