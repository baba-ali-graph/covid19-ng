import React from 'react'
import Cards from './components/Cards'

export default function(){
const hotlines = ['0930495-CORONA']
    return(
        <div className='card-hotline'>
            <h2 className='card-hotline-title'> NCDC Hotlines </h2>
            
            <p>
                {hotlines.map(ht => <span key={ht}> {ht} </span>)}
            </p>
        </div>
    )
}
