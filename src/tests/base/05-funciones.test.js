import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones'


describe('Pruebas en 05-funciones', () => {
    test('getUser Debe de retornar un objeto', () => {
        const userTest = {
            uid:'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        // console.log(user);
    
        //para comparar objetos se hace con toEqual
        expect( user ).toEqual( userTest );
    });

    //getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debe de retornar un objeto', () => {
        
        const nombre = 'Andres';
        /* const userTest = {
            uid:'ABC567',
            username: nombre
        } */
        const getObjeto = getUsuarioActivo(nombre);
        // console.log(getObjeto);
        expect(getObjeto).toEqual({
            uid:'ABC567',
            username: nombre
        });
    })
    
    
})
