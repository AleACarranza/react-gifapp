import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'


// Todo esto vuelve a cargar porque desde el GifExpertApp se detecto un cambio en las categorias(se agrego otra), por lo tanto todo esto se vuelve a rederizar, se vuelve a hacer la peticion HTTP y se muestran los resultados en pantalla
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        images: [],
        loading: true

    });
    // console.log(typeof state);
    // console.log(typeof state.images);
    // console.log(state);
    // console.log(state.images);
    // console.log(state.loading);
    useEffect(() => {
        // Le pasamos como argumento la categoria y nos retorna 10 objetos los cuales inyectamos en nuestro 'images' y aprovechamos a cambiar el loading a false para que se elimine el h4 que dice 'Cargando...'
        getGifs(category).then(img => {
            
            // Esto se dispara 3 seg despues
            setTimeout(() => {

                setState({
                    images: img,
                    loading: false
                })

            }, 3000);    

        })


    }, [category])
    
    return state; // Retornamos: { images:[id, title, url], loading: true }

}