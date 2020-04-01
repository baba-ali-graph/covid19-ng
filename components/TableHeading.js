import React from 'react'
import {isMobileView} from '../tools'
export default function () {
  return(
  <thead>
    <tr className='table-header'> 
      <th> Total </th>
      <th> {isMobileView() ? "Recovd" : "Recovered"}(%) </th>
      <th> Active(%) </th>
      <th> Deaths(%) </th>
    </tr>
  </thead>  
  )

}