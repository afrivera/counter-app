import React from 'react';
import '@testing-library/jest-dom';

import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas en <CounterApp />', () => {
    //definirlo global en el describe
    
    //esta función se ejecuta antes de todas y cada una de las pruebas
    let wrapper = shallow(<CounterApp />);//para no perder el intellisence
    beforeEach( ()=>{
        wrapper = shallow(<CounterApp />);
    })

    test('Debe de mostrar <CounterApp/> correctamentne', () => {
        
        // const contador = 10;
        // const wrapper = shallow(<CounterApp />);

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar el valor por defecto de 100', () => {
        
        const wrapper = shallow(<CounterApp value={100}/>);

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('100');
    });

    test('Debe incrementar con el boton +1', () => {

        // const wrapper = shallow(<CounterApp />);
        /* const btn1 =  */wrapper.find('button').at(0).simulate('click');
        // console.log(btn1.html());
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText).toBe('11');        
    });

    test('debe disminuir con el boton -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        // console.log(counterText);
        expect(counterText).toBe('9');
    });
    
    test('debe de hacer reset cone el boton reset', () => {
        
        const wrapper = shallow(<CounterApp value={105}/>);
        wrapper.find('button').at(0).simulate('click');
        // wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        // console.log(counterText);

        expect(counterText).toBe('105');
    });
    

});
