import React, {useState} from 'react'
import {msgUI, autoHiding} from '../tools'
import AutoHide from './AutoHide'
import {Animated} from 'react-animated-css'
import {connect} from 'react-redux'
import {hideMessage} from '../actions/actions'

function MessageBar({msg, hideMessage}){
    if(msg && msg.type != "progress")
        setTimeout(()=> hideMessage(), 5000)
    let componentClass = `message-bar mdi mdi-${msgUI(msg && msg.type)}`
  return(
    <>
    {msg &&
    <Animated className={componentClass} animationIn="fadeInUp" animationOut="fadeOutDown" duration="500"> 
    <div>   
      <span className='message-content'> {msg.text} </span>
    </div>
    </Animated>
    }
    </>
  )
}

const mapStateToProps = (state) => ({
  msg : state.message
})
const mapDispatchToProps = () => ({
    hideMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageBar)