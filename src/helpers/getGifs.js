
export const getGifs = async(category) => {

    // URL Obtenida con Postman                 
    //encoreURI() para escapar espacios y otras cosas para que la peticion sea correcta
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=GW675eA5UoLY5MPJp24XhHaoH7PD8PFf`
    // Aplicamos Fetch y esto nos devuelve un arreglo .json(data)
    const resp = await fetch(url);
    // Nos retorna un json(objeto) el cual contiene un arreglo de objetos y otros 2 objetos, aplicamos destructuring a la data
    const {data} = await resp.json();
    // En una variable nueva barremos el arreglo de objetos con ayuda de .map y extraemos los 10 elementos (son 10 porque en nuestra URL obtenida con Postman colocamos que fueran 10 gifs como limite), solamente queremos el id, el titulo, y el url del objeto y aplicamos destructuring:
    const gifs = data.map(({id, title, images}) => {
        return {
            // Va a retornar 10 objetos a nuestra constante gifs los cuales solo van a contener como id el 'img.id', es img porque lo colocamos como referencia al objeto, pero en este caso le aplicamos destructuring, por lo tanto solo colocamos que los objetos tomaran como id: el id que viene en la data del API
            id: id,
            title: title,
            // Esto es el gif como tal, estamos extrayendo el url del gif 'medium', no tan grande de img.images, el signo de intorrogacion es por si acaso no puede retornarnos alguna imagen
            url: images?.downsized_medium.url
        }
    })
    
    console.log('Gifs es tipo: ' + typeof gifs);
    // Retorna 10 objetos que contienen el id, titulo y el url de la imagen, esto lo inyectamos a la propiedad de nuestro custome Hook 'images'
    console.log(gifs);
    return gifs;

}