import './App.css';
import React from 'react'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
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
            <Card titulo="#13 - Desafio Mega" color="#2F846F">
                <Mega quantidade={6} />
            </Card>
            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>
            <Card titulo="#11 - Componente Controlado" color="#E45F56">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={4}/>
                <UsuarioInfo usuario={{ nome: "Fernando" }} />
               {/* <UsuarioInfo usuario={{ email: "fer@email.com" }} />
                                    <UsuarioInfo usuario={{ }} />
                    <UsuarioInfo /> */}
            </Card>
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
            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
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