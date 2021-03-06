import React, { useEffect, useState } from 'react'
import { Cita } from './components/Cita';
import { Formularios } from './components/Formularios'
import dog from './assets/img/dog.png'
import cat from './assets/img/cat.svg'


const CitasApp = () => {
    
    //citas en el local storage
     let citasIniciales = JSON.parse(localStorage.getItem('guardarCitas'));
     if (!citasIniciales){
         citasIniciales= [];
     }

    
    //Arreglo para guardar citas
    const [guardarCitas, setGuardarCitas] = useState(citasIniciales);

    //Use effect pera realizar ciertas operaciones cuando el stade(guadarCitas) cambia
    useEffect(() => {
        let citasIniciales = JSON.parse(localStorage.getItem('guardarCitas'));
        
        if (citasIniciales){
            localStorage.setItem('guardarCitas', JSON.stringify(guardarCitas))
        }else{
            localStorage.setItem('guardarCitas', JSON.stringify([]));
        }
    }, [guardarCitas] );
    
    //Funcion que tome las citas actuales y agrege las nueva
    const crearCita= (cita)=>{
        setGuardarCitas([...guardarCitas,cita]);
    };

    //Funcion que elimina una cita por su id
    const eliminarCita = (id)=>{
        const nuevasCitas = guardarCitas.filter(cita => cita.id !== id);
        setGuardarCitas(nuevasCitas);
    }
    
    //Mensaje condicional
    const titulo = guardarCitas.length === 0 ? 'No hay citas' : 'Administra tus citas'
    
    return (
        <>
            <header>
                <img className="logo animate__animated animate__backInLeft" src={dog} alt=""></img>
                <h1 className="animate__animated animate__backInDown">Administrador de pacientes</h1>
                <img className="logo animate__animated animate__backInRight" src={cat} alt=""></img>
            </header>
            
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formularios 
                            crearCita={crearCita}
                        />
                    </div>
                    <div className="one-half column">
                        <h2>{titulo}</h2>
                        {guardarCitas.map (cita => (
                            <Cita 
                                key= {cita.id}
                                cita={cita}
                                eliminarCita={eliminarCita}
                            />
                        ))}
                        
                    </div>
                </div>
            </div>
        
        
        </>
    )
}
export default  CitasApp;
