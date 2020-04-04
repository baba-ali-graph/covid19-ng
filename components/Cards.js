import React from 'react'
import Card from './Card'
import {daysSinceOutbreak, percentOf, daysSinceOutbreakInNigeria} from '../tools/index'
import {connect} from 'react-redux'

export default function Cards(props){
    const {baseCountry, globally} = props
    return(
        <>
        {globally &&
        <Card
            icon='earth'
            title={ globally.confirmed.value }
            text="Confirmed cases globally"
         />
         }
         
         <Card
            icon='calendar-text-outline'
            title={ '+' + daysSinceOutbreak() + ' Months' }
            text="Since Covid-19 outbreak"
         />
         
         <Card
            icon='calendar-today'
            title={daysSinceOutbreakInNigeria() + ' Days'}
            text="Since the first case was recorded in Nigeria"
         />
         {baseCountry &&
         <Card
            icon='account-multiple-check-outline'
            title={ parseInt((baseCountry.recovered / baseCountry.confirmed) * 100) }
            text="has recovered in Nigeria"
         />
        }
         
         
         <Card
            icon='percent-outline'
            title={percentOf(baseCountry.confirmed, globally,1) + "%"}
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
  globally : state.globally
})

export default connect(mapStateToProps)(Cards)