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
            title={ daysSinceOutbreak() + ' Months' }
            text="Since the Covid-19 began"
         />
         
         <Card
            icon='calendar-today'
            title={daysSinceOutbreakInNigeria() + ' Days'}
            text="Since the first case was recorded  Nigeria"
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
  totalGlobally : 145983
}
const mapStateToProps = (state) => ({
  baseCountry : state.baseCountry,
  totalGlobally : state.totalGlobally
})

export default connect(mapStateToProps)(Cards)