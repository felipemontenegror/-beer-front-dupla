import React, { useEffect, useState } from 'react'
import { ListUser, DeleteUser, UpdateUser } from '../services/user'
import Loading from '../loading/loading'



import './user.css'


const UserList = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const getList = async () => {

        try {
            setLoading(true)
            const users = await ListUser()
            setUsers(users.data)
            setLoading(false)            
        } catch (error) {
            console.log('error', error)
        }
 
    }

    const editUser = async ({ _id: id, nome }) => {
        try {
            if (window.confirm(`Voce deseja editar o usuário ${nome}`)) {
                await UpdateUser(id)
                getList()
            }
        } catch (error) {
            setLoading(false)
        }
    }

    const deleteUser = async ({ _id: id, nome }) => {
        try {
            if (window.confirm(`Voce deseja excluir o usuário ${nome}`)) {
                await DeleteUser(id)
                getList()
            }
        } catch (error) {
            setLoading(false)
        }
    }

    const verifyIsEmpty = users.length === 0

    const mountUsers = () => users.map((it, index)=> (

            <tr key='item'>
                <td>{it.name}</td>
                <td>{it.email}</td>
                <td>{it.password}</td>
                <td>
                    <span onClick={() => editUser(it)}>Editar</span> |
                    <span onClick={() => deleteUser(it)}>Excluir</span>
                </td>
            </tr>

        ))

    useEffect(() => {
        getList()
    },[])    

    return users ? (
            <div className="list_user">
                {loading ? <Loading show={users ? false : true}  /> : (
                <table border="1">
                    <thead>
                        <tr>
                            <th>NOME</th>
                            <th>EMAIL</th>
                            <th>SENHA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mountUsers()}                        
                    </tbody>
                </table>
                )}               
            </div>
        
    ) : ""

    }

export default UserList