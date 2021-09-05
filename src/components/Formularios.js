import React, { useState } from 'react'

export const Formularios = () => {
    
    //Crear state de citas
    const [cita, setCita] = useState({
        mascota:"",
        propietario:"",
        fecha:"",
        hora:"",
        sintomas:""
    });
    
    
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

        //asignar ID

        //Crear cita

        //Reiniciar el form
    }
    
    return (
        <>
            <h2>Crear cita</h2>
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
