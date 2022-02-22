import './App.css';
import React from 'react'

import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
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
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#07 - Repetição Produtos" color="#8A2BE2">
                <TabelaProdutos />
            </Card>
            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro"  />                    
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />                    
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio max={5} min={1} />            
            </Card>
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>        
            <Card titulo="#02 -Com Parâmetro" color="#E8B71A">
                <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro Silva"
                        nota={9.3} />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>  
        </div>            
    </div>