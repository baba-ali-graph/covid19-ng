import React from 'react'
import {render} from 'react-dom'
import AppHeader from './components/AppHeader'
import Covid19Table from './components/Covid19Table'
import DayBanner from './components/DayBanner'
import NewsUpdate from './components/NewsUpdate'
import SocialButtons from './components/SocialButtons'
import WelcomeText from './components/WelcomeText'
import store from './store/index'
import {Provider} from 'react-redux'


import "./styling/index.css"
import "./styling/base.css"

 function App() {
   return(
     <div className='app-body'>
     <Provider store={store}>
      <AppHeader />
      <DayBanner />
      <WelcomeText />
      <Covid19Table />
      <NewsUpdate />
      <SocialButtons />
    </Provider>
     </div>
   )
 }

 render(<App/> , document.querySelector('#root'))