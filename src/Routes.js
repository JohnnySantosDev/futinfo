import React from "react";
import {Routes, Route} from 'react-router-dom';
import Inicio from "./pages/noticias";

import Detalhes from "./pages/noticia";
function Rotas(){
    return(
        <Routes>
            <Route exact path="/" element={<Inicio />} ></Route>        
            <Route exact path="/Noticia/:NoticiaId" element={<Detalhes />}></Route> 
          

        </Routes>
    );
}


export default Rotas;

