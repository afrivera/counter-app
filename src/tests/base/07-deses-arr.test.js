import { retornaArreglo } from '../../base/07-deses-arr'


describe('Pruebas en desestructuración', () => {
    test('Debe de retornar un String y un numero', () => {
        
        // const arr = retornaArreglo(); //return ['ABC', 123];
        const [letras, numeros] = retornaArreglo(); //return ['ABC', 123];
        // console.log(typeof letras);
        // expect( arr ).toEqual(['ABC', 123]);
        expect( letras ).toBe('ABC');
        expect( typeof letras ).toBe('string');

        expect( numeros ).toBe(123);
        expect( typeof numeros ).toBe('number');

    })
    
    
})
