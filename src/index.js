import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

//const tag = <strong>Olá React!</strong>

ReactDOM.render(
    //<div>
    //   { tag }
    //</div>, 
    <div>
        <Primeiro></Primeiro>  
        <ComParametro 
         titulo="Situação do Aluno" 
         aluno="Pedro Silva"
         nota={9.3} />                              
    </div>,
    document.getElementById('root')
)