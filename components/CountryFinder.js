import React, {useState} from 'react'
import {connect} from 'react-redux'
import {compareStart} from '../actions/actions'
export default function CountryFinder(props){
  const [status, setStatus] = useState('inactive')
  const [country, setCountry] = useState('')
function handleShortcut(e){
  if(e.key=="enter")
    props.compareStart(country)
}
  return(
    <div className='country-finder-container'>
      <label> Compare : </label>
      <input 
        className={'country-finder-input' + status}
        onFocus={e=> setStatus('active')}
        onBlur={e=> setStatus('inactive')}
        onChange={e => setCountry(e.target.value)}
        type='search'
        onKeyDown={e => handleShortcut(e)}
        placeholder="Which country ? " />
      <button 
        className='country-finder-button'
        onClick={e=> props.compareStart(country)}
        >
        Compare
      </button>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  compareStart : country => dispatch(compareStart(country))
})
export default connect(null,mapDispatchToProps)(CountryFinder)