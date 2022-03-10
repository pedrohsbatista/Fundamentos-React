import React, { Component } from "react"
import Input from "./Input"
import Process from "./Process"
import Output from "./Output"

export default class Mega extends Component {

    state = {
        quantidade: this.props.quantidade,
        numeros: []
    }

    setQuantidade = (quantidade) => {
        this.setState({
            quantidade: quantidade
        })
    }

    returnNumbers = (numeros) =>  {          
        this.setState({
            numeros: numeros
        })
    }

    render() {
        return (
            <div>
                <Input quantidade={this.state.quantidade} setQuantidade={this.setQuantidade} />
                <Process quantidade={this.state.quantidade}  returnNumbers={this.returnNumbers}/>
                <Output numeros={this.state.numeros} />
            </div>
        )
    }   
}