import React, {useEffect, useState} from 'react'
import {render} from 'react-dom'
import AppHeader from './components/AppHeader'
import Covid19Table from './components/Covid19Table'
import DayBanner from './components/DayBanner'
import NewsUpdate from './components/NewsUpdate'
import SocialButtons from './components/SocialButtons'
import WelcomeText from './components/WelcomeText'
import MessageBar from './components/MessageBar'
import CountryFinder from './components/CountryFinder'
import Cards from './components/Cards'
import Hotline from './components/Hotline'
import References from './components/References'
import store from './store/index'
import {connect} from 'react-redux'
import {requestStart} from './actions/actions'

import "./styling/index.css"
import "./styling/base.css"

  function App(props) {
    props.requestStart()
   return(
     <div className='app-body'>
      <AppHeader />
      <WelcomeText />
      <Covid19Table />
      <CountryFinder/>
      <Cards />
      <NewsUpdate />
      <SocialButtons />
      <References />
      <Hotline />
      <MessageBar />
     </div>
   )
 }


const mapStateToProps = (state) => ({
  baseCountry : state.baseCountry
})
const mapDispatchToProps = {
  requestStart
}
export default connect(null, mapDispatchToProps)(App)