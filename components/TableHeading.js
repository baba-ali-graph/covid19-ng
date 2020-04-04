import React from 'react'
import {isMobileView} from '../tools'
export default function () {
  return(
  <thead>
    <tr className='table-header'> 
      <th> Country </th>
      <th> Confirmed </th>
      <th> {isMobileView() ? "Recovd" : "Recovered"}(%) </th>
      <th> Deaths(%) </th>
    </tr>
  </thead>  
  )

}