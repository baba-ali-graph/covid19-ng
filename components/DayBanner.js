import React from 'react'
import {currentDay} from '../tools'

export default function(props){
  let populationPercent = percentd(props.countries[0].total, 180000000)
  return(
    <div className='day-banner'>
      <h3> Day {currentDay} </h3>
      <p About {populationPercent} of the population has been diagnosed
    </div>
  )
}