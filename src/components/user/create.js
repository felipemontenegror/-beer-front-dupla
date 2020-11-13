import React, { useState } from 'react'
import axios from 'axios'
//import { ClientHTTP } from '../../config/config'
//import { CreateUser } from '../services/user'

const UserCreate = () => {

        const [form, setForm] = useState({
            is_active: true,
            is_admin: false
        })

        const handleChange = (event) => {
            setForm({
                ...form,
                [event.target.name]: event.target.value
            })
            return;
            
        }

        const formIsValid = () => {
            return form.name && form.email && form.password
        }

        const submit = (event) => {
            console.log('form', form)
            axios.post('http://localhost:3001/user', form)
            //clientHTTP.post('/user', form)
            //CreateUser('form', form)
            .then((resposta) => {
                alert("Formulário enviado com sucesso")
                setForm({
                    is_active: true,
                    is_admin: false
                })
            })
            .catch(err => console.log('deu ruim'))
        }

        return (
            <section>
                <div className="create_users">
                    <form action="" className="form_login">
                        <div>
                            <label htmlFor="auth_name">Nome: </label>
                            <input id="auth_name" type="text" name="name" onChange={handleChange} value={form.name || ""} placeholder="Digite seu nome aqui" />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail: </label>
                            <input id="auth_email" type="email" name="email" onChange={handleChange} value={form.email || ""} placeholder="email@provedor" />
                        </div>
                        <div>
                            <label htmlFor="auth_password">Senha: </label>
                            <input id="auth_password" type="password" name="password" onChange={handleChange} value={form.password || ""} placeholder="Digite sua Senha" />
                        </div>

                        <div>
                            <label htmlFor="auth_fabricante">Fabricante: </label>
                            <input id="auth_fabricante" type="fabricante" name="fabricante" onChange={handleChange} value={form.fabricnate || ""} placeholder="Digite a Fabricante" />
                        </div>

                        <div>
                            <label htmlFor="auth_nacionalidade">Nacionalidade: </label>
                            <input id="auth_nacionalidade" type="nacionalidade" name="nacionalidade" onChange={handleChange} value={form.nacionalidade || ""} placeholder="Digite a Nacionalidade" />
                        </div>

                        <div>
                            <label htmlFor="auth_tipo">Tipo: </label>
                            <input id="auth_tipo" type="tipo" name="tipo" onChange={handleChange} value={form.tipo || ""} placeholder="Digite a Tipo" />
                        </div>

                        <div>
                            <label htmlFor="auth_teor">Teor: </label>
                            <input id="auth_teor" type="teor" name="teor" onChange={handleChange} value={form.teor || ""} placeholder="Digite o teor alcoolico" />
                        </div>

                        <div>
                            <label htmlFor="auth_ibu">IBU: </label>
                            <input id="auth_ibu" type="ibu" name="ibu" onChange={handleChange} value={form.ibu || ""} placeholder="Digite o IBU " />
                        </div>


                        <button disabled={!formIsValid()} onClick={submit}>Cadastrar</button>         
                    </form>
                </div>
            </section>

    )
}

export default UserCreate