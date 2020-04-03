import React from 'react'
import Cards from './components/Cards'
import {daysSinceOutbreak, daysSinceOutbreakInNigeria} from '../tools/index'

export default function Cards(props){
    const {baseCountry, totalGlobally} = props
    return(
        <>
         <Card
            icon='day'
            title={'Day' + daysSinceOutbreak()}
            text="Since the first case was recorded globally"
         />
         
         <Card
            icon='day'
            title={'Day' + daysSinceOutbreakInNigeria()}
            text="Since the first case was recorded Nigeria"
         />
         
         <Card
            icon='health'
            title={percentOf(baseCountry, totalGlobally) + "%"}
            text="Since the first case was recorded globally"
         />
                  
        </>
    )
}
