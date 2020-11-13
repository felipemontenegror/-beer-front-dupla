import React from 'react'
import Footer from '../footer/footer'

export default function Header(){

    //const [ title, setTitle ] = useState("GERENCIADOR DE USUÁRIOS")

    return(
        <React.Fragment>
            <header>
                <div className="container">
                <div className="title">GERENCIADOR DE USUÁRIOS</div>
                        <div className="profile"> User | Sair </div>
                </div>
            </header>
            <hr />
            
        </React.Fragment>
    )
}

//export default Header

/*export default class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="container">
                        <div className="title">GERENCIADOR DE USUÁRIOS</div>
                        <div className="profile"> Lucas | Sair </div>
                </div>
                <hr />
            </header>
        )
    }
}

*/