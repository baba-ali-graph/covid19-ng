import React, {Fragment, useEffect} from 'react'
import TableHeading from './TableHeading'
import CompareRow from './CompareRow'
import {initialState} from '../reducer/reducer'
import {connect} from 'react-redux'
import {resolveModifierClass} from '../tools/index'
import {requestStart, requestSuccess, requestError} from '../actions/actions'

function Covid19Table ({requestStart, requestSuccess, requestError, state}) {
  const rows = renderRows(state)
  requestStart()
    
   return(
         <div className='table-container'>
            <table>
                <TableHeading />
                {rows}
            </table>
         </div>
    )
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
    for (let key in country){
        cells.push(<td> {country[key]} </td> )
    }
    return cells
}

export default function renderComparism(a,b){
    let cells = []
    let count = 0
    for(let key in a){ // Since 'a' and 'b' are expected to have the same keys, I wont repeat for 'b'.
        let result = a[key] - b[key]
        let modifierClass = resolveModifierClass(key,result) // is Nigeria higher than comparedCountry for the metric ? 
        let denominator = a[key] > b[key] ? a[key] : b[key]
        let percent = parseInt((Math.abs(result) / denominator) * 100) 
        cells.push(count == 0 ? <td> Diff </td> : <td className={modifierClass}> {percent} % {modifierClass} </td>)
        count++
    }
    return cells
}

Covid19Table.defaultProps = {
  state : initialState
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