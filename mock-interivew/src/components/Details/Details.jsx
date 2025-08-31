import React from 'react'
import './Details.css'

function Details() {
  return (
    <div className='details'>
      Fill your Details here : 
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSceXgXWR2D5boSlC2jtFRd3eb1hxkXybLcjeZUOwO05dpMZlw/viewform?usp=dialog/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-outline-success form"
      >
        Google form
      </a>
    </div>
  )
}

export default Details