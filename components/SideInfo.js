import React from 'react'
import Cards from './Cards'
import Hotline from './Hotline'

export default function SideInfo(props){
    return(
        <div className='side-info-container'>
            <Cards />
            <Hotline />
        </div>
    )
}
