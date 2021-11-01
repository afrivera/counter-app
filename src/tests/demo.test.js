
//para hacer la primera prueba
/* test( 'debe de ser true', ()=>{
    const isActive = true;

    if(isActive){
        throw new Error('no está activo');
    }    

}) */
//describir pruebas

describe('Pruebas en el archivo demo.test.js', ()=>{

    test( ' deben de ser iguales los strings', ()=>{
        //1. Inicialización
        const mensaje = 'Hola Mundo';
    
        //2. Estímulo
        const mensaje2 = `Hola Mundo`;
    
        //3. Observar el comportamiento
        expect( mensaje).toBe( mensaje2 );//deben ser iguales
    });
});
