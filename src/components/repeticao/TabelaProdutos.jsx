import React from "react";
import produtos from "../../data/produtos"
import './TabelaProdutos.css'

export default props => {
    function getProdutos(){
        return produtos.map((produto, i) => {
            return  <tr key={produto.id} className={i % 2 == 0 ? 'Par' : ''}>
                         <td>{produto.id}</td>
                         <td>{produto.nome}</td>
                         <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                     </tr>
         })   
    }  
    return(
        <table className="Tabela">  
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                </tr>  
            </thead>                  
            <tbody>
                {getProdutos()}
            </tbody>
        </table>
    );
}