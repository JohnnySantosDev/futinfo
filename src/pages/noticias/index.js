import React from "react";
import "./index.css"
import {Link} from 'react-router-dom';
const noticias = () => {

    return (
<div>
    <div class="anuncios">

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
    <div class="container">
        <div class="box">
            <div className="l-cards">        
                <article className="c-card">
                    <img  src={require("./img/0000001.png")}   ></img>      
                    <p>Clube Apresenta Jovem Promessa.</p>     
                    <Link to = "./noticia/0000001.png" >Saiba Mais</Link>
                </article>     
                <article className="c-card">
                    <img  src={require("./img/0000002.png")}   ></img>         
                    <p>Tecnico pede Contratação do jogador.</p>    
                    <Link to = "/noticia/0000002.png" >Saiba Mais</Link>
                </article>      
                <article className="c-card">
                    <img  src={require("./img/0000003.png")}   ></img>      
                    <p>Neto sai em defesa de Cleber Machado.</p>     
                    <Link to = "./noticia/0000003.png" >Saiba Mais</Link>
                </article>     
                <article className="c-card">
                    <img  src={require("./img/0000004.png")}   ></img>         
                    <p>Tecnico pede Contratação do jogador.</p>    
                    <Link to = "/noticia/0000004.png" >Saiba Mais</Link>
                </article> 
            </div>
        </div>
    </div>
</div>
        
   
 
  );  
}  
       

export default noticias