import React from "react";
import "./index.css"
import {Link} from 'react-router-dom';
const noticias = () => {
const rotas = [
    window.btoa("0000001.png"),
    window.btoa("0000002.png"),
    window.btoa("0000003.png"),
    window.btoa("0000004.png"),
    window.btoa("0000005.png"),
    window.btoa("0000006.png"),
    window.btoa("0000007.png"),
    window.btoa("0000008.png")

]

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
                    <Link to =  {"/Noticia/"+rotas[0]} >Saiba Mais</Link>
                </article>     
                <article className="c-card">
                    <img  src={require("./img/0000002.png")}   ></img>         
                    <p>Tecnico pede Contratação do jogador.</p>    
                    <Link to =  {"/Noticia/"+rotas[1]} >Saiba Mais</Link>
                </article>      
                <article className="c-card">
                    <img  src={require("./img/0000003.png")}   ></img>      
                    <p>Neto sai em defesa de Cleber Machado.</p>     
                    <Link to =  {"/Noticia/"+rotas[2]} >Saiba Mais</Link>
                </article>     
                <article className="c-card">
                    <img  src={require("./img/0000004.png")}   ></img>         
                    <p>Clube Formaliza Proposta por Ferreirinha.</p>    
                    <Link to =  {"/Noticia/"+rotas[3]} >Saiba Mais</Link>
                </article> 
                <article className="c-card">
                    <img  src={require("./img/0000005.png")}   ></img>         
                    <p>Clube Formaliza Proposta Milhonaria por Artur.</p>    
                    <Link to =  {"/Noticia/"+rotas[4]} >Saiba Mais</Link>
                </article> 
                <article className="c-card">
                    <img  src={require("./img/0000006.png")}   ></img>      
                    <p>Neto sai em defesa de Cleber Machado.</p>     
                    <Link to =  {"/Noticia/"+rotas[5]} >Saiba Mais</Link>
                </article>     
                <article className="c-card">
                    <img  src={require("./img/0000007.png")}   ></img>         
                    <p>Clube Formaliza Proposta por Ferreirinha.</p>    
                    <Link to =  {"/Noticia/"+rotas[6]} >Saiba Mais</Link>
                </article> 
                <article className="c-card">
                    <img  src={require("./img/0000008.png")}   ></img>         
                    <p>Clube Formaliza Proposta Milhonaria por Artur.</p>    
                    <Link to =  {"/Noticia/"+rotas[7]} >Saiba Mais</Link>
                </article> 
                
            </div>
        </div>
    </div>
</div>
        
   
 
  );  
}  
       

export default noticias