import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({category}) => {
    
    // Desestructuramos el objeto
    const {images, loading} = useFetchGifs(category);

    return (
        <>``
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>
            {/* Operador ternario con AND */}
            <h4 className="animate__animated animate__flash">{loading && 'Cargando...'}</h4>
            
            <div className="card-grid">

                { 
                    // Va a iterar 10 veces, nos va a generar 10 cartas, y son solo 10 veces porque el images solo contiene 10 objetos, el images => hace referenacia al objeto 'images'
                    images.map( images => {
                        return <GifGridItem
                            key={images.id}
                            // Con esto mandamos todo el objeto completo de 'images', ya en el componente de GifGridItem haremos destructuring
                            { ...images }
                        />
                    } )
                }

            </div>
        </>
    )
}


