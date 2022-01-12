import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import './favoritos.css';

export default function Favoritos() {
 const [filmes, setFilmes] = useState([]);

 useEffect(() => {
  const minhaLista = localStorage.getItem("filmes");
  setFilmes(JSON.parse(minhaLista) || []);

 }, [])

 function handleDelete(id){
   let filtroFilmes = filmes.filter((item) => {
     return (item.id !== id)
   })

   toast.success("Filme apagado dos favoritos com sucesso!");

   setFilmes(filtroFilmes)
   localStorage.setItem("filmes", JSON.stringify(filtroFilmes));
 }

 return (
   <div id="meus-filmes">
       <h1>Meus Filmes</h1>

        {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}

       <ul>
        {filmes.map((filme) => {
          return(
            <li key={filme.id}>
              <span>{filme.nome}</span>

              <div>
                <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                <button onClick={() => handleDelete(filme.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
       </ul>
   </div>
 );
}