import React from 'react'
import PropTypes from 'prop-types'
// import { Fragment } from 'react';


//hay dos tipos de continentes basados en clases y funciones
//fc = functional component
const PrimeraApp = ( { saludo, subtitulo})=>{


    // const saludo = 'Hola Mundo';
    // const saludo = [1,2,3]; los arreglos y primitivos
   /*  const saludo = {
        nombre: 'Andres',
        edad: 31
    } */

    // console.log(props);

    /* if(!saludo){ no es aconsejable
        throw new Error ('El saludo es necesario')
    } */
    return (
        <>{/* fragment sin import */}
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> para enviar objetos */}
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    );
}


//asi se escriben props requeridas y se define el tipo
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

//enviar props por defecto
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;