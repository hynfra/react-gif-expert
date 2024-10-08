
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  
  // hook de react


  const {images, isLoading } = useFetchGifs( category );

    
  
    return (
        <>
              <h3>{ category }</h3>
              {
                //recibe el boolean para ver si se cargaron las imagenes
                // el null no se carga en react
                isLoading 
                ? ( <h2>cargando...</h2>)
                 : null
              }
      

                <div className="card-grid" >
                  {

                    images.map(  (image) => (// el () es un return implicito

                      <GifItem 
                      key={ image.id }
                      // envia todos los parametros al componente, donde se debe desestructura para obtener los datos que se necesitan
                      {...image }
                      />
                      ))

                  }
                 
                </div>
           
        </>
  )
}
