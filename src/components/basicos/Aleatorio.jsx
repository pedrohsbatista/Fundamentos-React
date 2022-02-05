import React from 'react'

export default props => {
   const numero = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;   
   return(
    <>
      <h2>Número sorteado: </h2>
      <strong> { numero }</strong>
    </>
   )   
}