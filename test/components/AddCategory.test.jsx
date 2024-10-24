// se pone .jsx por que es un functional component que tiene un jsx dentro

import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('pruebas en <AddCategory />', () => { 


    test('debe de cambiar el valor de la caja de texto', () => { 

        // al renderizar se debe enviar una funcion el proptype creado

        // se crea el sujeto de pruebas
        render(<AddCategory onNewCategory={() => {}} />);

        // se extrae el imput
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        // se pone el componente y el evento que recibe
        // se lanza el evento
        // del objeto se extrae el target y desde el objeto target se extrae el atributo value
        fireEvent.input( input, { target: { value: 'Saitama'} } );
        fireEvent.submit( form );

        //colocamos lo que esperamos que suceda despues del evento
        expect( input.value ).toBe('Saitama');

        // esto dibuja el componente en el cmd 
        screen.debug();



     })

     test('debe de llamar onNewCategory si el input tiene un valor', () => { 

        //simulamos un submit del formulario

        const inputValue = 'Saitama';

        // mook es una simulacion de la funcion

        const onNewCategory = jest.fn();

        // se crea el sujeto de pruebas
        render(<AddCategory onNewCategory={onNewCategory} />);


        // referenci al input y formulario

        const input = screen.getByRole('textbox');

        // para recibir el <form> se le debe poner un aria-label en los atributos del form
        const form = screen.getByRole('form');

        // del objeto se extrae el target y desde el objeto target se extrae el atributo value
        fireEvent.input( input, { target: { value: 'Saitama'} } );
        fireEvent.submit( form );

        // esto dibuja el componente en el cmd 
        //screen.debug();

        expect( input.value ).toBe('');

        //esto indica que la funcion ha sido llamada
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1); // esto indica que la funcion fue llamada N veces
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); // esto indica que la funcion esta siendo llamada por el valor de la caja de texto




      })

      test('no debe de llamar el onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

      

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();



       })



 })