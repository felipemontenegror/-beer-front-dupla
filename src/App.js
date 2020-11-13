import React, { useState } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Menu from './components/menu/nav'

import routes from './components/routes/routes' 


function App() {

  const [page, setPage] = useState('Login')

  const routeSelected = routes[page]

  const ComponentSelected = routeSelected.component
  
  const isShowMenu = (routes) => routes.showMenu ? <Menu page={routes} changePage={setPage} /> : ""
      

  return (
    <React.Fragment>
      
        <Header titleSite='GERENCIADOR DE USUÁRIOS' />
        
        <main>
          
          {isShowMenu(routeSelected)}

          <ComponentSelected changePage={setPage} />
          
        </main>
        
  
  </React.Fragment>
  );
}

export default App;