import React, {useState} from 'react'
import {iconSelect, autoHiding} from '../tools'
import {Animated} from 'react-animated-css'

export default function MessageBar({msgType,content}){
 let hidden = false
 autoHiding(hidden, 500)
  return(
    <div className='message-bar'>
    <Animated animationIn="slideUp" animationOut="slideDown" duration="500">
      <span className={`mdi mdi-${iconSelect(msgType)}`}/>
      <span className='message-content'> {content} okay </span>
    </Animated>
    </div>
  )
}


const mapStateToProps = (state) => ({
  msgType : state.message.type,
  content : state.message.text
})