import React from 'react'
import './nav.css'


const Menu = (props) => {
    console.log(props)
        const { to, name } = props.page.actions
        return (
        <nav className="">
            <div className="title">Lista de Usuários</div>
            <div className="action">
            <button onClick={() => props.changePage(to)}>
                {name}
            </button>
            </div>
        </nav>
        
        )


}
export default Menu;