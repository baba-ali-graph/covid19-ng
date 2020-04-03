import React from 'react'
import Cards from './components/Cards'
import {hotlines} from '../tools/index'
export default function(){
    return(
        <div className='card-hotline'>
            <h2 className='card-hotline-title'> NCDC Hotlines </h2>
            
            <p>
                {hotlines.map(ht => <span key={ht}> {ht} </span>)}
            </p>
        </div>
    )
}
