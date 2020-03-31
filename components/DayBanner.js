import React from 'react'
import {currentDay, percentOf} from '../tools'
import {connect} from 'react-redux'

export default function DayBanner (props){
  let populationPercent = percentOf(131, 180000000)
  return(
    <div className='day-banner'>
      <h3> Day {props.currentDay} </h3>
      <p> About {populationPercent} of the population has been diagnosed with the virus</p>
    </div>
  )
}
const mapStateToProps = (state) => {
 return {
    currentDay : state.currentDay
 }
}

export default connect(mapStateToProps)(DayBanner)