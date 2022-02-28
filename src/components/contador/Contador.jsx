import "./Contador.css"
import React, { Component } from 'react'

/*export default class Contador extends React.Component {

}*/

/*export default class Contador extends Component {

}*/

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    /*constructor(props){
        super(props)
        this.state = {
            numero: props.numeroInicial
        }
        this.inc = this.inc.bind(this)
    }*/


    /*inc(){
        this.setState({
            numero: this.state.numero + 1
        })
    }*/

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>    
                <h3>{this.state.numero}</h3>    
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso}/>
                </div>
                {/*<button onClick={e => this.inc()}>+</button> */}                      
                <button onClick={this.inc}>+</button>                
                <button onClick={this.dec}>-</button>                
            </div>
        )
    }
}

export default Contador