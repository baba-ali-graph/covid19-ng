import React, {useState} from 'react'

export default function AutoHide(props){
  const [hidden, setHidden] = useState(false)
  if(props.hidden)
    setTimeout(()=> setHidden(true), props.hideAfter)
  return(
    <>
      {!hidden && props.children}
    </>
  )
}

AutoHide.defaultProps = {
  hideAfter : 2000,
  hidden : false
}