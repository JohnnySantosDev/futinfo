import { useState } from "react"
import './index.css';
import {Link} from 'react-router-dom';
import meulogo from  "../../img/meulogo.png"
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    
    <div className="HeaderPai">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2811782341555306"
     crossorigin="anonymous"></script>
        <nav className="navigation">
        
          <button
          className="hamburger"
          onClick={() => {
          setIsNavExpanded(!isNavExpanded)
          }}
        >
        {   <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>}
      </button>
      <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu" }>
        <ul>
        <li> <Link to = "./noticia/0000001.png" >Noticias</Link></li>
          <li><a href="/"> Inicio </a></li>
        </ul>
      </div>
    </nav>
    </div>
  );
}
