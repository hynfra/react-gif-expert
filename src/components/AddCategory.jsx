import { useState } from "react"

// siempre se recibe el objeto props pero se puede desestructurar y obtener setCategories
export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState();

    const onInputChange = ({target}) =>{
        // se debe acceder a event.target.value para recibir los cambios dentro del input
        
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        // esto evita que se refresque la pagina al enviar un formulario
        event.preventDefault();
        // esto evita que se ingresen valores vacios 
        if( inputValue.trim().length <= 1) return;
        //setCategories(categories => [inputValue, ...categories]);

        setInputValue('');
        onNewCategory(inputValue.trim());
    }


  return (
    // esto no es html, aqui son properties
    // el form por defecto hace que recarge la pagina web completa al enviarlo por eso se pone el onSubmit
    // el siguiente codigo es lo mismo que (event) => onSubmit(event)
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
    
        />

    </form>
    
  )
}
