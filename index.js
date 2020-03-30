import React from 'react'
import {render} from 'react-dom'
import "./styling/index.css"

 function App() {
   return(
     <div className='mdi mdi-book'> A cool book is fun to read
     </div>
   )
 }

 render(<App/>, document.querySelector('#root'))