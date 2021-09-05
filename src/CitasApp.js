import React, { useState } from 'react'
import { Formularios } from './components/Formularios'

const CitasApp = () => {
    
    //Arreglo para guardar citas
    const [guardarCitas, setGuardarCitas] = useState([]);
    
    //Funcion que tome las citas actuales y agrege las nueva
    const crearCita= (cita)=>{
        setGuardarCitas([...guardarCitas,cita]);
    };
    
    
    return (
        <>
            <h1>Administrador de pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formularios 
                            crearCita={crearCita}
                        />
                    </div>
                    <div className="one-half column">
                        
                    </div>
                </div>
            </div>
        
        
        </>
    )
}
export default  CitasApp;
