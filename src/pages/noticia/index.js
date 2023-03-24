import React from "react";
import {Link, useParams} from 'react-router-dom';
import "./index.css"


const Noticia = () => {
   let {NoticiaId} = useParams()

   return (
   <div className="container">
   <div  className="anuncio">
      <img  src={require("./img/"+NoticiaId)}   ></img>         
   </div>
   <div className="l-cards">        
        <article className="c-card">
            <img  src={require("../noticias/img/0000001.png")}   ></img>      
            <p>Clube Apresenta Jovem Promessa.</p>     
            <Link to = "./noticia/0000001.png" onClick={() => window.location.reload()} >Saiba Mais</Link>
        </article>     
        <article className="c-card">
            <img  src={require("../noticias/img/0000002.png")}   ></img>         
            <p>Tecnico pede Contratação do jogador.</p>    
            <Link to = "/noticia/0000002.png"  onClick={() => window.location.reload()} >Saiba Mais</Link>
        </article>      
         <article className="c-card">
            <img  src={require("../noticias/img/0000001.png")}   ></img>      
            <p>Clube Apresenta Jovem Promessa.</p>     
            <Link to = "./noticia/0000001.png" onClick={() => window.location.reload()} >Saiba Mais</Link>
        </article>     
        <article className="c-card">
            <img  src={require("../noticias/img/0000002.png")}   ></img>         
            <p>Tecnico pede Contratação do jogador.</p>    
            <Link to = "/noticia/0000002.png"  onClick={() => window.location.reload()} >Saiba Mais</Link>
        </article>      
        
    </div>
   </div>
  );  
}  
       

export default Noticia;