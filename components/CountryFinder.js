import React, {useState} from 'react'
import {connect} from 'react-redux'
import {retrieve} from '../actions/actions'
export default function CountryFinder(props){
  const [status, setStatus] = useState('inactive')
  const [country, setCountry] = useState('')
function handleShortcut(e){
  if(e.key="enter")
    props.retrieve(country)
}
  return(
    <div className='country-finder-container'>
      <label> Compare : </label>
      <input 
        className={'country-finder-input' + status}
        focusIn={e=> setStatus('active')}
        focusOut={e=> setStatus('inactive')}
        onChange={e => setCountry(e.target.value)}
        type='search'
        onKeyDown={e => handleShortcut(e)}
        placeholder="Which country ? " />
      <button 
        className='country-finder-button'
        onClick={e=> props.retrieve(country)}
        >
        Compare
      </button>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  retrieve : country => dispatch(retrieve())
})
export default connect(null,mapDispatchToProps)(CountryFinder)