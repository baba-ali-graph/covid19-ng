import React from 'react'
import Card from './Card'
import {daysSinceOutbreak, percentOf, daysSinceOutbreakInNigeria} from '../tools/index'
import {connect} from 'react-redux'

export default function Cards(props){
    const {baseCountry, totalGlobally} = props
    return(
        <>
         <Card
            icon='calendar-text-outline'
            title={'Day ' + daysSinceOutbreak()}
            text="Since the first case was recorded globally"
         />
         
         <Card
            icon='calendar-today'
            title={'Day ' + daysSinceOutbreakInNigeria()}
            text="Since the first case was recorded Nigeria"
         />
         
         <Card
            icon='percent-outline'
            title={percentOf(baseCountry.total, totalGlobally,1) + "%"}
            text="Cases of all cases globally are in Nigeria"
         />
                  
        </>
    )
}

Cards.defaultProps = {
  baseCountry : {total:173},
  totalGlobally : 14598
}
const mapStateToProps = (state) => ({
  baseCountry : state.baseCountry,
  totalGlobally : state.totalGlobally
})

export default connect(mapStateToProps)(Cards)