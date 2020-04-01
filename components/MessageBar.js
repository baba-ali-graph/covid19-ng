import React, {useState} from 'react'
import {msgUI, autoHiding} from '../tools'
import AutoHide from './AutoHide'
import {Animated} from 'react-animated-css'

export default function MessageBar({msgType,content}){
    const [hidden, setHidden] = useState(false)
    const componentClass =` message-bar mdi mdi-${msgUI(msgType)}`
    if(!hidden && msgType != "progress")
        setHidden(true)
  return(
    <AutoHide hideAfter={5000} hidden={hidden}>
    <Animated className= {componentClass} animationIn="fadeInUp" animationOut="fadeOutDown" duration="500"> 
    <div className={}>   
      <span className='message-content'> {content} </span>
    </div>
    </Animated>
    </AutoHide>
  )
}
MessageBar.defaultProps = {
  msgType : "error",
  content : "Error ! Couldn't load data "
}


const mapStateToProps = (state) => ({
  msgType : state.message.type,
  content : state.message.text
})