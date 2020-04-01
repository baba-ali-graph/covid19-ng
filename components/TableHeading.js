import React from 'react'
import {isMobileView} from '../tools'
export default function () {
  return(
  <thead>
    <th className='table-header'> 
      <td> Total </td>
      <td> {isMobileView() ? "Recovd" : "Recovered"}(%) </td>
      <td> Active(%) </td>
      <td> Deaths(%) </td>
    </th>
  </thead>  
  )

}