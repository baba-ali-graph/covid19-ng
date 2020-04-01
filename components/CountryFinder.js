import React, {useState} from 'react'
import {connect} from 'react-redux'
import {retrieve} from '../actions/actions'
export default function CountryFinder(){
  const [status, setStatus] = useState('inactive')

  return(
    <div className='country-finder-container'>
      <label> Compare : </label>
      <input 
        className={'country-finder-input' + status}
        onFocus={e=> setStatus('active')}
        onBlur={e=> setStatus('inactive')}
        type='search'
        onKeyDown={e => handleShortcut(e.target.value)}
        placeholder="Which country ? " />
      <button 
        className='country-finder-button'
        onClick={e=> props.retrieve}
        >
        Compare
      </button>
    </div>
  )
}

const mapDispatchTor
export default connect(null,dispatch =>({retrieve:dispatch(retrieve)}))(CountryFinder)