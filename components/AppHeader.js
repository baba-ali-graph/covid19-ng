import React, {useEffect} from 'react'
import {connect} from 'react-redux'

export default function AppHeader(props){
  return(
    <div className='app-header'>
      
      <h2 onClick={e=> props.requestStart()}> Covid19-Ng </h2>
    </div>
  )
}

