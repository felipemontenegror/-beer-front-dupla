import axios from 'axios'
import { getToken } from './auth'
import history from './history';


const clientHttp = axios.create({  //axios responsavel por fazer requisicoes http (em producao e local)
    baseURL: `https://beer-back.herokuapp.com/` || `http://localhost:3001`
    
// https://infnet-bootcamp-api.herokuapp.com/api

})



clientHttp.defaults.headers['Content-Type'] = 'application/json';


if (getToken()) {
    clientHttp.defaults.headers['x-auth-token'] = getToken();
}




const interceptor = clientHttp.interceptors.response.use(
    response => response,
    error => {
        // Error
        const { response: { status } } = error;

        if (error.message === 'Network Error' && !error.response) {
            alert('você está sem internet')
        }

        switch (status) {
            case 401:
                console.log('401', 'sem autorização')
                // removeToken()
                history.push('/login')
                break;
            case 403:
                history.push(`/erro/403`)
                break;
            case 404:
                history.push(`/erro/404`)
                break;
            default:
                console.log('500', 'Aconteceu um erro ')
                history.push(`/erro/500`)
                break;
        }
        axios.interceptors.response.eject(interceptor);
        return Promise.reject(error);
    }
);


export {
    clientHttp
}
