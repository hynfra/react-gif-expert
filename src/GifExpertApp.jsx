
import {useState} from 'react';

import {AddCategory, GifGrid} from './components';

// si pones rafc + tab escribe todo automatico
export const GifExpertApp = () => {

  // NO SE DEBEN PONER CONDICIONALES EN LOS HOOKS

  //hook de react
    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) =>{

      if( categories.includes(newCategory) ){
        return;
      }

      console.log(newCategory);
      
      // se crea un array nuevo donde se guarda el array creado y se añade un nuevo valor
      setCategories([  newCategory,...categories ]);
      //setCategories(cat => [...cat,'valorant']);


    }

  return (
   <>
 
        <h1>GifExpertApp</h1>

         {/* renderiza el component de AddCategory ubicado en components  */}
          <AddCategory 
          //setCategories={ setCategories } 
          // event => onAddCategory(event) se recibe el evento y se manda por parametros
          onNewCategory= { (value) => onAddCategory(value) }
          />
      
            { 
            //NO se debe usar el indice de map
            //map permite ver cada elemento del arreglo y regresar algo nuevo
            categories.map( (category) => (

                <GifGrid key = {category} 
                category={ category } />


              ))
            }
           
       
   </>
  )
}
