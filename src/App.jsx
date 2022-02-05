import React from 'react'

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
        <Aleatorio max={5} min={1} />
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3} />
        <Primeiro></Primeiro>
    </div>