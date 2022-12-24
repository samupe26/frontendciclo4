import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:5000/api/Perito/'

const CompMostrarPerito = () => {

    const [ perito, setPerito] = useState ([])
    useEffect( () => {
        getPerito();
    },[])

    // funcion para mostrar todos los usuarios 
    const getPerito = async () => {
        const res = await axios.get(URL)
        setPerito(res.data);
 }

 //funcion para eliminar usuarios 
 const eliminarPerito = async (id) =>{
    await axios.delete(`${URL}${id}`)
    getPerito();
 }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>

                    <Link to='/agregar' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-user-plus"></i> </Link>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <td> Nombres </td>
                                <td> Apellidos </td>
                                <td> Documento </td>
                                <td> Correo </td>
                                <td> Telefono </td>
                                <td> Direccion </td>
                                <td> Acciones </td>
                            </tr>
                        </thead>
                        <tbody>
                            { perito.map (( perito, index) => (
                            <tr key = { index }>
                                <td> { perito.nombres }</td>
                                <td> { perito.apellidos }</td>
                                <td> { perito.documento }</td>
                                <td> { perito.correo }</td>
                                <td> { perito.telefono }</td>
                                <td> { perito.direccion }</td>
                               <td>
                                <Link to={`/editar/${perito._id}`} className='btn btn-primary'><i className="fa-solid fa-pen"></i></Link>
                                <button onClick={ ()=>eliminarPerito(perito._id)}className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                               </td>
                            </tr>
                            
                            
                            ))}



                        </tbody>

                    </table>
                </div>

            </div>
        </div>
 )
}

export default CompMostrarPerito;