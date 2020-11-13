import axios from 'axios'

const ClientHTTP = axios.create({
    baseURL: 'http://localhost:3001/user'
})

//clientHTTP.defaults.headers['Content-Type'] = 'aplication/json'

export {
    ClientHTTP
}