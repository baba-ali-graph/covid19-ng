import React from 'react'
import Cards from './components/Cards'

export default function(){
const hotlines = ['Whatsapp number : +234 708 711 0839', 'SMS number : +234 809 955 5577', ' Toll-free number : 0800 9700 0010']
    return(
        <div className='card-hotline'>
            <h2 className='card-hotline-title'> NCDC Hotlines </h2>
            
            <p>
                {hotlines.map(ht => <span key={ht}> {ht} </span>)}
            </p>
        </div>
    )
}
