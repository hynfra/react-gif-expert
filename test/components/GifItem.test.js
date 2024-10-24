
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('pruebas en GifItem', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';


    test('debe de hacer match con el snapshot', () => { 

        // se busca que el componente calce con la renderizacion

        // se renderiza y  luego las variables se envian ya que son obligatorias por los proptypes
       const {container} = render( <GifItem title={title} url = {url} />)

        expect( container ).toMatchSnapshot();
     

       



     });

     test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 

        // renderiza el componente
            render( <GifItem title={ title } url={ url } />);
           //esto permite visualizar si se esta renderizando en el cmd
           // screen.debug();
           // esperamos que el img tenga el mismo url que esta aca

           // se obtienen los valores de screen.getByRole con un . al final
          
           //expect( screen.getByRole('img').src).toBe( url );
           //expect( screen.getByRole('img').alt).toBe( title );

           const {src, alt} = screen.getByRole('img');

           expect( src ).toBe( url );
           expect( alt ).toBe( alt );

      })

      test(' debe de mostra el titulo en el componente', () => {   

            render( <GifItem title= { title } url= {url} />)
            expect( screen.getByText( title ) ).toBeTruthy();


       })




 });