import React from "react";
import {Link, useParams} from 'react-router-dom';
import "./index.css"


const Noticia = () => {
   let {NoticiaId} = useParams()

   return (
    <div>
        <div class="anuncios">
            <h1>Anuncios</h1>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2811782341555306"
        crossorigin="anonymous"></script>

        <ins class="adsbygoogle"
        data-ad-client="ca-pub-2811782341555306"
        data-ad-slot="6190877328"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        </div>
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
            <img  src={require("../noticias/img/0000003.png")}   ></img>      
            <p>Neto sai em defesa de Cleber Machado.</p>  
            <Link to = "/noticia/0000003.png" onClick={() => window.location.reload()} >Saiba Mais</Link>
        </article>     
        <article className="c-card">
            <img  src={require("../noticias/img/0000002.png")}   ></img>         
            <p>Tecnico pede Contratação do jogador.</p>    
            <Link to = "/noticia/0000002.png"  onClick={() => window.location.reload()} >Saiba Mais</Link>
        </article>      
        
    </div>
   </div>
   </div>
  );  
}  
       

export default Noticia;