
import { getGifs } from "../../src/helpers/GetGifs"


describe('pruebas en getGifs()', () => { 


    test('debe retornar un arreglo de gifs', async() => { 

        const gifs = await getGifs('One Punch');

        //console.log(gifs);

        // se espera que el arreglo de gifs sea mayor que 0
        expect(gifs.length ).toBeGreaterThan( 0 );
        // se espera que el primer gif recibido, tenga String en los valores de sus atributos
        expect( gifs[0] ).toEqual({
            id: expect.any( String ), // se espera recibir un String
            title: expect.any( String ),
            url: expect.any( String ),
        })

     })


 })