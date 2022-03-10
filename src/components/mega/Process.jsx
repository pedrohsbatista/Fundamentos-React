import React from "react";

export default props => {

    function gerarNumeros() {
        let numeros = [];

        while(numeros.length < props.quantidade)
        {            
            let newNumero = Math.floor(Math.random() * (60 - 1 + 1)) + 1;  
            if (!numeros.some(numero => numero == newNumero))
                numeros.push(newNumero)
        }
     
        numeros.sort(function(a, b) {
            return a-b;
        })            
        
        return numeros
    }

    return (
        <div>            
            <button onClick={e => props.returnNumbers(gerarNumeros())}>Gerar</button>
        </div>
    )
}