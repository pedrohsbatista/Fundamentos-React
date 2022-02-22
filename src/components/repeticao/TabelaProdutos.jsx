import React from "react";
import produtos from "../../data/produtos"

export default props => {
    const results = produtos.map((produto) => {
       return  <tr>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco}</td>
                </tr>
    })
    console.log(results);
    return(
        <table style={{ width: "100%" }}>  
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                </tr>  
            </thead>                  
            <tbody>
                {results}
            </tbody>
        </table>
    );
}