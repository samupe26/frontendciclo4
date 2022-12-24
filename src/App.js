import './App.css';



//importar el router
import { BrowserRouter as Router } from 'react-router-dom';
import Rutas from './configuracion/rutas';
import CompNavbar from './configuracion/Navbar';



function App() {
  return (
    <div className="App">
      
      
     
     <Router>
     <CompNavbar/>
      <Rutas/>

     </Router>
     

    </div>
  );
}

export default App;
