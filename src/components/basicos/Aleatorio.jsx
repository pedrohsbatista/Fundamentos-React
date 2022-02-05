import React from 'react'

export default props => {
    const { min, max } = props;
   const numero = Math.floor(Math.random() * (max - min + 1)) + min;   
   return(
    <>
      <h2>Número sorteado: </h2>
      <p><strong> { numero }</strong></p>
    </>
   )   
}