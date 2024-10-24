import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"



describe('pruebas en el hook useFetchGifs', () => { 

    test('debe de ingresar al estado inicial', () => { 

        //los hooks deben ser llamados dentro de un functional component

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        

        const {images, isLoading} = result.current;
        

        //espera que el estado inicial no haya ninguna imagen
        expect( images.length ).toBe(0);
        //espera que el boolean sea verdadero
        expect( isLoading ).toBeTruthy();



     });

     test('debe de retornar un arreglo de imagenes y isloading en false', async() => { 

        //los hooks deben ser llamados dentro de un functional component
        // los hooks se evaluan en funcion de su retorno

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        

        //espera por...
        await waitFor(
            // se coloca una expresion q devuelva boolean
            // espera que el tamaño de las imagenes sea mayor que 0
            () => expect( result.current.images.length).toBeGreaterThan(0),
            


        );
        const {images, isLoading} = result.current;


       // const {images, isLoading} = result.current;
        

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();



     });




 })