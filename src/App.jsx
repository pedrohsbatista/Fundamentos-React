import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

//Usar default pode usar função anônima (sem atribuir um nome)

// function ou arrow function(=>) mesma sintaxe
//export default function(props){

//Arrow function parâmetrização:
// se tiver 1 parâmetro pode remover o parênteses
// se não tiver parâmetro pode usar parênteses vazio
// se tiver 1 parâmetro não utilizado pode usar _

//Usar arrow function pode remover o corpo do componente
// {
//   return (
//   )
// }

export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>

        <Card titulo="#04 - Desafio Aleatório">
            <Aleatorio max={5} min={1} />            
        </Card>

        <Card titulo="#03 - Fragmento">
             <Fragmento />
        </Card>
    
        <Card titulo="#02 -Com Parâmetro">
            <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3} />
        </Card>       

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>         
     
    </div>