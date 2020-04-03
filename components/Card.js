import React from 'react'

export default function({icon, title, text}){
    return(
        <div className='card-item'>
            <span className={`card-item-icon mdi mdi-${icon}`}>  </span>
            <h2> {title} </h2>
            <p> {text} </p>
        </div>
    )
}
