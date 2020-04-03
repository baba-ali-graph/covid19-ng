import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {requestStart} from '../actions/actions'

 function AppHeader(props){
  useEffect(()=>{
    let aborter = new AbortController()
    function initRequest(){
      props.requestStart()
    }
    initRequest()
    return () => aborter.abort()
  })
  return(
    <div className='app-header'>
      
      <h2> Covid19-Ng </h2>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  requestStart : () => dispatch(requestStart())
}

export default connect(null, mapDispatchToProps)(AppHeader)