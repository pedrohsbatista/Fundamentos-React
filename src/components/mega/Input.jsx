import React from "react";

export default props => {
    return (
        <div>
            <input type="number" value={props.quantidade} onChange={e => props.setQuantidade(e.target.value)} />            
        </div>
    )
}