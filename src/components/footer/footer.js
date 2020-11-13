import React from 'react'
import imgLogo from '../../assets/img/beer.png'
import './footer.css'

export default function Footer(){
    return(
        <footer>
            <hr />
            <div className="footer">
                <div className="projectname">
                    CADASTRO DE RÓTULOS DE CERVEJAS
                </div>
                <div className="logobottom">
                    <img src={imgLogo} alt="" />
                </div>
            </div>
        </footer>
    )    
}

/*
export default class Footer extends React.Component{
    render(){
        return(
            <footer>
            <hr />
            <div className="footer">
                <div className="projectname">
                    BOOTCAMP - Full Stack :: MERN
                </div>
                <div class="logobottom">
                    <img src={imgLogo} alt="" />
                </div>
            </div>
            </footer>
        )
    }
}
*/