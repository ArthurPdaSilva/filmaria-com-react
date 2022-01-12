import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';
import './filme-info.css';

export default function Filme() {
 const {id} = useParams();
 const history = useHistory();
 const [filme, setFilme] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
     async function loadFilme(){
        const response = await api.get(`r-api/?api=filmes/${id}`);

        if(response.data.length === 0){
            //Voltar para a tela inicial
            toast.error("Filme não encontrado, redirecionando você para a home...");
            history.replace('/');
        }

        setFilme(response.data);
        setLoading(false);
     }
     loadFilme();

     return () => {
         console.log("Componente foi desmontado ao mudar de página!");
     }
 }, [history, id])

 function salvarFilme(){
    const minhaLista = localStorage.getItem('filmes');
    //Se não tiver nada retorne um array vazio
    let filmesSalvos = JSON.parse(minhaLista) || [];
    //Retorne true ou false
    const hasFilme = filmesSalvos.some((filmes) => filmes.id === filme.id);
    if(hasFilme){
        toast.error('Você já possui esse filme salvo!');
        return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
}

 if(loading){
     return(
         <div className="carregando">
             <h1>Carregando seu filme...</h1>
         </div>
     )
 }

 return (
   <div className="filme-info">
       <h1>{filme.nome}</h1>
       <img src={filme.foto} alt={filme.nome}/>
       <h3>Sinopse</h3>
       {filme.sinopse}
       <div className='btns'>
           <button onClick={salvarFilme}>Salvar</button>
           <button>
               <a target="_blank" rel="noreferrer" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>Trailer</a>
           </button>
       </div>
   </div>
 );
}