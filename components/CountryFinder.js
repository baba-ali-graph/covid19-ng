import React, {useState} from 'react'

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
        onClick={e=> props.retr}
        >
        Compare
      </button>
    </div>
  )
}