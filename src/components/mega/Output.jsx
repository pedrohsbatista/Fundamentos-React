import React from "react";

export default props => {    
    return (
        <div>
            {props.numeros.map((numero, i) => {                
                return(<span key={i}>{i > 0 ?  - numero : numero}</span>)
            })}
        </div>
    )
}