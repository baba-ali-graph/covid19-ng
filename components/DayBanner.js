import React from 'react'
import {currentDay, percentOf} from '../tools'

export default function(props){
  let populationPercent = percentOf(131, 180000000)
  return(
    <div className='day-banner'>
      <h3> Day {currentDay} </h3>
      <p> About {populationPercent} of the population has been diagnosed with the virus</p>
    </div>
  )
}