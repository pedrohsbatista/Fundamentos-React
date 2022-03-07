import React from 'react'

export default props => {
    return (
        <div>
            {/*<button onClick={e => this.inc()}>+</button> */}                      
            <button onClick={props.setInc}>+</button>                
            <button onClick={props.setDec}>-</button>  
        </div>
    )
}