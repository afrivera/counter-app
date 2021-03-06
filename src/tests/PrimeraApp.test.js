// import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <PrimeraApp/>', () => {

    
    // test('Debe de Mostrar el Mensaje "Hola, soy Goku', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const {getByText} = render( <PrimeraApp saludo={saludo}/>);
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // });
    
    test('Debe de mostrar <PrimerApp/> correctamente', () => {
        
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect( wrapper ).toMatchSnapshot( );
    });

    test('Debe de mostrar el subtitulo enviado por props ', () => {
        
        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Soy un supersayayin'
        const wrapper = shallow(
                <PrimeraApp 
                    saludo={saludo}
                    subtitulo={subtitulo}                
                />);
        const textoParrafo = wrapper.find('p').text();
        // console.log(textoParrafo);
        expect( textoParrafo).toBe( subtitulo);
    });
    
    
    

});
