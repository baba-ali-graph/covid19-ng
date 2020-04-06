import React from 'react'
import Cards from './components/Cards'

export default function(){
const hotlines = ['Whatsapp No : +234 708 711 0839', 'SMS No : +234 809 955 5577', ' Toll-free No : 0800 9700 0010']
    return(
        <div className='card-hotline'>
            <h2 className='card-hotline-title'> NCDC Hotlines </h2>
            
            <p>
                {hotlines.map(ht => <div className='ht' key={ht}> {ht} </div>)}
            </p>
        </div>
    )
}
