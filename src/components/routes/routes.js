import Login from '../login/login'
import UserList from '../user/list'
import UserCreate from '../user/create'

const routes = {

    'List': {
      component: UserList,
      showMenu: true,
      actions: {
        name: 'Novo',
        to: 'Create'
      }
    },
    'Create': {
      component: UserCreate,
      showMenu: true,
      actions: {
        name: 'Lista',
        to: 'List'
      }
    },
    'Login': {
      component: Login,
      showMenu: false
    }
  
  }
  

export default routes