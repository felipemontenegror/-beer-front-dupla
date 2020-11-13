import React, { Fragment, useState } from 'react'
import Footer from '../../components/footer/footer'
import './login.css'

const Login = (props) => {
    const [form, setForm] = useState({})

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        return
    }

    const formIsValid = () => {
        return form.email && form.password
    }

    const submitForm = (e) => {
        e.preventDefault()
    }

    return (
        <Fragment>
        <section>
            <form className="form_login">
                <div className="form-login">
                    <label htmlFor="email">Email:</label>
                    <input onChange={(e) => handleChange(e)} type="text" value={form.email || ""} name="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha:</label>
                    <input onChange={(e) => handleChange(e)} value={form.password || ""} type="password" name="password" id="password" />
                </div>
                <button onClick={() => props.changePage('List')}>Login</button>

            </form >
        </section>
        
        </Fragment>
        
    )
}

export default Login