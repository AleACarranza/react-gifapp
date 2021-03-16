import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {

    // const categories = ['One Punch', 'Digimon', 'Pokemon'];
    const [categories, setCategories] = useState([])


    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Comunicacion entre componentes */}
            {/* Le paso como prop mi setCategories y Categories para poder 'agregar' categorias desde el componente hijo, podria obviar las 'categories'...
            El nombre del prop puede ser cualquiera, pero por mantener el orden lo ponemos el mismo nombre del Hook useState 
            Cuando se cambia el estado de las categorias(Se agrega una nueva) todo el componente se vuelve a cargar, entonces todo vuelve a funcionar y se hacen las peticiones HTTP y todo*/}
            <AddCategory setCategories={setCategories} categories={categories}/>
            <hr></hr>

            <ol>
                { 
                    // Estos map's son como un for/forEach, va a iterar conforme las categorias que haya y las va a mostrar gracias al componente del GifGrid, Siempre que iteramos con .map tenemos que colocarle un key=""
                    categories.map( category => {
                        return <GifGrid
                        // El key es obligatorio y debe ser unico, no lo estamos haciendo unico ya que si buscamos 2 veces por ejemplo: 'Futbol', la key se repite y esto nos marca un warning en la consola
                            key={category} 
                            // Le mandamos la categoria como prop
                            category={category}
                        />
                    } )
                }
            </ol>
        </>
    );

}

export default GifExpertApp;