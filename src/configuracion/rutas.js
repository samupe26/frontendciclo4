// importamos componentes
import CompMostrarUsuarios from '../componentes/MostrarUsuarios';
import CompAgregarUsuarios from '../componentes/AgregarUsuarios';
import CompeEditarUsuarios from '../componentes/EditarUsuarios';



//importar el router
import { Route, Routes } from 'react-router-dom';

const Rutas = () => {
 return(
 
    <Routes>
     <Route path='/usuarios/' element ={ <CompMostrarUsuarios/> } />
     <Route path='/usuarios/agregar/' element ={ <CompAgregarUsuarios/> } />
     <Route path='/usuarios/editar/:id' element ={ <CompeEditarUsuarios/> } />
     

     </Routes>
   
     )
}

export default Rutas;