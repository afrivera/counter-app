import '@testing-library/jest-dom';//para obtener ayuda

import { getSaludo } from '../../base/02-template-string';



describe('Pruebas en 02-template-string.test.js', () => {
    test('getSaludo debe de retornar Hola Andres', () => {
        const nombre = 'Andres';

        const saludo = getSaludo( nombre );
        // console.log(saludo);

        expect( saludo ).toBe('Hola ' + nombre);

    })

    //getSaludo debe de retornar Hola Carlos sino hay argumento en nombre
    test('getSaludo debe retornar Hola Carlos', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos')
    });    
    
})
