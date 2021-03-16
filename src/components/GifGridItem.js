import React from 'react'

// Aplicamos destructuring
export const GifGridItem = ({ title, url }) => {
    // console.log(id, title, url);
    return (
        <div className="card animate__animated animate__fadeInDown">
            {/* Generamos 10 cartas */}
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
