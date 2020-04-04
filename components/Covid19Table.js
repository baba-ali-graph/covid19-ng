import React, {Fragment, useEffect} from 'react'
import TableHeading from './TableHeading'
import CompareRow from './CompareRow'
import {initialState} from '../reducer/reducer'
import {connect} from 'react-redux'
import {resolveModifierClass, percentCompute} from '../tools/index'
import {requestStart, requestSuccess, requestError} from '../actions/actions'
import Loading from './Loading'
function Covid19Table ({requestError, state}) {
  const rows = renderRows(state)
  if(state.baseCountry){
   return(
         <div className='table-container'>
            <table>
                <TableHeading />
                {rows}
            </table>
         </div>
    )
  }
  else {
      return <Loading />
}
}

      
function renderRows(state) {
    return(
        <tbody>
        <tr> {renderCountry(state.baseCountry)} </tr>
        <tr className='row-compare-country'> {state.compareCountry ? renderCountry(state.compareCountry) : <td> {state.error} </td> } </tr>
        {state.compareCountry && <CompareRow> {renderComparism(state.baseCountry, state.compareCountry)} </CompareRow> }
        </tbody>
      )

}

function renderCountry(country){
    let cells = []
    let count = 0
    for (let key in country){
        let percent = parseInt((Math.abs(country[key]/country['confirmed'])) * 100)
        cells.push(<td> {country[key]} {count > 1  && <span className="percent"> ({percent}%) </span> } </td> )
        count++
    }
    return cells
}

export default function renderComparism(a,b){
    let cells = []
    let count = 0
    for(let key in a){ // Since 'a' and 'b' are expected to have the same keys, I wont repeat for 'b'.
        let result = a[key] - b[key]
         // is Nigeria higher than comparedCountry for the metric ? 
        let percent = percentCompute(a['confirmed'],a[key],b['confirmed'],b[key]) 
        let modifierClass = resolveModifierClass(key,percent)
        let comment = percent < 0 ? 'lower' : 'higher'
        percent = Math.abs(percent)
        cells.push(count == 0 ? <td> Diff </td> : percent == 0 ? <td> 0 </td> : <td className={modifierClass}> <span className="percent"> {percent}% ({comment}) </span> </td>)
        count++
    }
    return cells
}

const mapStateToProps = (state) => ({
state : state
})

const mapDispatchToProps = (dispatch) => ({
    requestStart : () => dispatch(requestStart()),
    requestSuccess : (payload) => dispatch(requestSuccess(payload)),
    requestError : (error) => dispatch(requestError(error))
})
 export default connect(mapStateToProps)(Covid19Table)
