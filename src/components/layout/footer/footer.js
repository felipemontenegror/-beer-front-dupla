import React from 'react'
import './footer.css'
import imgLogo from '../../../assets/img/beer.png'

const Footer = () => (
    <footer>
        <div className="projectName">
            CCdoB - Cadastro dos Cervejeiros do Bootcamp
      </div>
        <div className="copyRight">
            <img src={imgLogo} alt="" />
        </div>
    </footer>
)


export default Footer
