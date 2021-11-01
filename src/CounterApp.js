import React, {useState} from 'react';
// import PropTypes from 'prop-types';

//para la proxima usar el snippet rafcp

const CounterApp = ({value=10})=>{

    //hook no es más que una función
    const [counter, setCounter] = useState(value);
    // console.log(nombre, setNombre);


    //handleAdd
    const handleAdd =()=>{
        // setCounter( counter + 1);se puede trabajar de las dos formas
        setCounter( (c)=> c + 1);
    }

    const handleSub = ()=>{
        setCounter(counter - 1);
    }

    const reset =()=>{
        setCounter(value)
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>      
            <button onClick={ handleAdd }>+1</button>  
            <button onClick={ reset }>Reset</button>  
            <button onClick={ handleSub }>-1</button>  
        </>
    )
}

// CounterApp.defaultProps = {
//     value: PropTypes.number
// }

export default CounterApp;