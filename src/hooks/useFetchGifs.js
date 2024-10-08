import { getGifs } from "../helpers/GetGifs";
import {useState, useEffect} from 'react';


export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
  

    const getImages = async() => {
  
      const newImages = await getGifs( category );
      setImages(newImages);
      setIsLoading(false);
  
  
    }
  
    // este hook se ejecuta cuando se haga algo, dispare este hook como uno desee
    // el primer parametro es lo que se se quiere lanzar usando el useEffect
    // se envia un callback con el metodo a usar
    // el segundo parametro son las dependencias, si se dejan vacias, este useEffect solo se usara cuando se cree el componente (GifGrid)
    useEffect( () => {
      
      getImages();
    
    }, [])
  
    //no se deben poner una funcion directamente en un functional component
  

    return {
        // esto es lo mismo que images: images ya que cuando tienen el mismo nombre se puede poner asi
        images,
        isLoading
    }
}
