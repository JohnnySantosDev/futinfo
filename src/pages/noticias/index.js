import React from "react";
import "./index.css"
import {Link} from 'react-router-dom';
const noticias = () => {

    return (

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
                    <img  src={require("./img/0000001.png")}   ></img>      
                    <p>Clube Apresenta Jovem Promessa.</p>     
                    <Link to = "./noticia/0000001.png" >Saiba Mais</Link>
                </article>     
                <article className="c-card">
                    <img  src={require("./img/0000002.png")}   ></img>         
                    <p>Tecnico pede Contratação do jogador.</p>    
                    <Link to = "/noticia/0000002.png" >Saiba Mais</Link>
                </article> 
            </div>
        </div>
    </div>
        
   
 
  );  
}  
       

export default noticias