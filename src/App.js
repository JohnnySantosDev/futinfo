import {BrowserRouter} from 'react-router-dom'
import Rotas from './Routes';
import Navbar from './pages/header';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Rotas/>
      </BrowserRouter>
    </div>
  );
}

export default App;
