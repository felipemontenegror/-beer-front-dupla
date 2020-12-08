import React from 'react'
import Login from './components/login/login'
import { isAuthenticated } from './config/auth';
import {
    Switch,
    Route,
    Redirect,
    Router
} from "react-router-dom";
import User from './views/User';
import ErrorHandler from './views/errors/error';
import history from './config/history';


const CustomRoute = ({ ...rest }) => {
    if (!isAuthenticated()) {
        return <Redirect to='/login' />
    }
    return <Route {...rest} />
}

const Routers = () => (
    <Router history={history} >
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/erro/:erro" component={ErrorHandler} />
            <CustomRoute path="/" component={User} />

        </Switch>
    </Router>
)

export default Routers;










// const routes = {
//     'List': {
//         component: UserList,yarn
//         showMenu: true,
//         actions: {
//             name: 'Novo',
//             to: "Create"
//         }
//     },
//     'Create': {
//         component: UserCreate,
//         showMenu: true,
//         actions: {
//             name: 'Lista',
//             to: "List"
//         }
//     },
//     'Login': {
//         component: Login,
//         showMenu: false,
//     },
// }

// export default routes;
