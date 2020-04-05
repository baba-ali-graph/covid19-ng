import React from 'react'
import SocialButtons from './SocialButtons'
import References from './References'
import Hotline from './Hotline'

export default function AppFooter(){
  return (
    <footer>
      <div className='top-footer'>
        <References />
        <Hotline />
      </div>
      <div className='bottom-footer'>
        <div>For feedback, comments, suggestions & Bug report : </div>
        <SocialButtons />
      </div>
    </footer>
  )
}