import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas en funciones de heroes', () => {

    test('debe de retornar un heroe por Id', () => {
        const id = 1;
        const heroe = getHeroeById( id );
        // console.log(heroe);

        const heroeData = heroes.find(h =>h.id ===id);

        expect( heroe ).toEqual(heroeData);
    })

    test('debe de retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById( id );
        // console.log(heroe);

        expect( heroe ).toBe(undefined);
    })

    test('Debe de retornar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        // console.log(heroe); 
        const heroeData = heroes.filter(h => h.owner ===owner) //filter( (heroe) => heroe.owner === owner );
        expect( heroe ).toEqual(heroeData);

    })

    test('Debe de retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        // const heroeData = heroes.filter(h=> h.owner===owner);

        expect(heroe.length).toBe( 2);
    })
    
    
    
    
})
