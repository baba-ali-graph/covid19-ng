import React from 'react'

export default function References({references}){
  return (
    <div className='references-container'>
    <h2> Sources </h2>
    {references.map(reference => <a  href={reference} className='reference' key={reference}> {reference} </a>)}
    </div>
  )
}

References.defaultProps = {
  references : ["https://guardian.ng/news/nigeria-confirms-first-case-of-coronavirus/",
  ]
}