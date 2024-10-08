export const getGifs = async( category) => {

    // api sacada de https://developers.giphy.com/dashboard/
    // link para recibir gifs api.giphy.com/v1/gifs/search
    // se recibe la category por parametros y se deja luego de la api_key
    const url = `https://api.giphy.com/v1/gifs/search?api_key=a6tnPrKYPZ3Eo37Ds2d1QEp7GGj4Mt6n&q=${category}&limit=10`
    const resp = await fetch ( url );

    const { data } = await resp.json(); // se saca la data de la respuesta 

    // recorre las imagenes y las almacena en gifs
    const gifs = data.map( img => ({// aqui regresa un objeto al abrir ({})

        // cada variable (id,title) se extraen de la respuesta
        id: img.id,
        title:img.title,
        url:img.images.downsized_medium.url

    }));

  

    return gifs;
}