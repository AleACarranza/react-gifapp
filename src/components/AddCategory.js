import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Usar props
export const AddCategory = ({setCategories, categories}) => {

    const [inputValue, setInputValue] = useState(''); // Hay que colocar un string vacio, porque si no lo colocamos nos marcaria un error en consola

    const handleInputChange = (e) => {
        // Permite ver que se esta cambiando el estado de nuestro InputValue gracias a que estamos registrandole el nuevo estado gracias al e (que es el evento que en este caso es onChange).target(Apunta al input).value(el valor/lo que estamos tecleando en el), y con esto se esta retroalimentando el solo, cada tecla es un nuevo cambio de estado
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        // Prevenimos el clasico refresh
        e.preventDefault();
        // Con .trim limpiamos espacios en blanco y damos lectura a que por lo menos el String tenga 2 caracteres
        if( inputValue.trim().length > 2 ){
            // Cambiamos el estado del listado de animes del componente padre
            // ...Y aqui colocar cat => [...cat, inputValue], porque yo si no pasara como prop las categories no las tendria como referencia, pero solamente al hacer la referencia al setCategories, que tiene el estado anterior y voy a hacer el añadido aca(inputValue)
            // Para mostrar primero los gifs del ultimo estado que ingresamos al input colocamos primero el inputValue, y despues el resto de categorias que ya teniamos
            setCategories([inputValue, ...categories]);
            // Limpiamos el inputValue/Se borra el contenido del input
            setInputValue('');
        }
        
    }

    return (

            // onSubmit: Al enviar el formulario se dispara la funcion de hanldeSubmit
        <form onSubmit={handleSubmit}>
            {/* onChange: Cada que se escriba o se elimine algo se va a disparar el evento, este evento cambia el estado de nuestro inputValue a lo que se escriba dentro del input, esto pues literalmente por cada letra que coloquemos o quitemos va a estar ejecutando esa funcion que 'cambia el estado'/'reescribe' nuestro value(contenido) de nuestro input */}
            <input type="text" value={inputValue} onChange={ handleInputChange }/>
        </form>

    )
}

// PropTypes
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired

};

