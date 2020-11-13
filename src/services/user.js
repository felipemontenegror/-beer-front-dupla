import { clientHTTP } from ("../config/config")

const createUser = (data) => clientHTTP.post('/user', data)

const ListUser = () => clientHTTP.get('/user')

const DeleteUser = (id) => clientHTTP.delete(`/user/${id}`)

const EditUser = (id) => clientHTTP.patch(`/user/${id}`)

export{
    createUser,
    ListUser,
    DeleteUser,
    EditUser
}