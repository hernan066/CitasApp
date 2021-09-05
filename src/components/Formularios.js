import React, { useState } from 'react'
import uuid from 'react-uuid'
import PropTypes from 'prop-types';

const Formulario = ({crearCita})=>{

}

export const Formularios = ({crearCita}) => {
    
    //Crear state de citas
    const [cita, setCita] = useState({
        mascota:"",
        propietario:"",
        fecha:"",
        hora:"",
        sintomas:""
    });

    const [error, setError] = useState(false);
    
    
    //Funcion que se ejecuta cada vez que el usuario escribe en el form
    const handleChange =(e)=>{
        console.log("escribiendo...")
        setCita({
            //...cita genera una copia de 
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer valores
    const{mascota, propietario, fecha, hora, sintomas}= cita;

    //Cuando el usuario preciona agregar cita
    const submitCita = (e)=>{
        //por defecto usa el metodo get, para prevenir esto usamos
        e.preventDefault();

        //validar
        if (mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === "" ){
            setError(true);
            return;
        }

        //Eliminar mensaje de error
        setError(false);
        
        //asignar ID
        cita.id = uuid();
        
        //Crear cita
        crearCita(cita);


        //Reiniciar el form
        setCita({
            mascota:"",
            propietario:"",
            fecha:"",
            hora:"",
            sintomas:""
        });
    }
    
    return (
        <>
            <h2>Crear cita</h2>
            
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>   : null  }
            <form
                onSubmit={submitCita}
            >
                <label>Nombre de la mascota</label>
                <input
                    type="text"
                    name= "mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre del dueño de la mascota</label>
                <input
                    type="text"
                    name= "propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la mascota"
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name= "fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                    
                />
                <label>Hora</label>
                <input
                    type="time"
                    name= "hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                   
                />
                <label>Sintomas</label>
                <textarea
                    name= "sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
                

            </form>
        </>
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired

};

