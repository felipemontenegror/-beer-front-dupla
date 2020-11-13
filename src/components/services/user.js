import { ClientHTTP } from '../../config/config'

const CreateUser = (form) => ClientHTTP.post('/user', form)

const ListUser = (form) => ClientHTTP.get(form)

const UpdateUser = (data) => ClientHTTP.patch(`/user/${data._id}`, data)

const DeleteUser = (id) => ClientHTTP.delete(`/user/${id}`)

export {
    CreateUser,
    ListUser,
    UpdateUser,
    DeleteUser
}