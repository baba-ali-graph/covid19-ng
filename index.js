import React from 'react'
import {render} from 'react-dom'
import AppHeader from './components/AppHeader'
import Covid19Table from './components/Covid19Table'
import DayBanner from './components/DayBanner'
import NewsUpdate from './components/NewsUpdate'
import SocialButtons from './components/SocialButtons'
import WelcomeText from './components/WelcomeText'
import MessageBar from './components/MessageBar'
import CountryFinder from './components/CountryFinder'
import SideInfo from './components/SideInfo'
import References from './components/References'
import store from './store/index'
import {Provider} from 'react-redux'
import {getBaseCountry} from './tools/index'

import "./styling/index.css"
import "./styling/base.css"

 function App() {
    const baseCountry = getBaseCountry()
   return(
     <div className='app-body'>
     <Provider store={{...store, baseCountry:baseCountry ? baseCountry : null}}>
      <AppHeader />
      <DayBanner />
      <WelcomeText />
      <Covid19Table />
      <CountryFinder/>
      <SideInfo />
      <NewsUpdate />
      <SocialButtons />
      <References />
      <MessageBar />
    </Provider>
     </div>
   )
 }


const mapStateToProps = (state) => ({
  baseCountry : state.baseCountry
})
const mapDispatchToProps = (dispatch) => ({
  onload  = dispatch({type:APP_LOAD})
})
 render(<App/> , document.querySelector('#root'))
