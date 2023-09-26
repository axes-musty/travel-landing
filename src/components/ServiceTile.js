/* eslint-disable react/prop-types */
import React from 'react'
import '../css/servicetile.css'

const ServiceTile = (props) => {
  let className = props.className

  if (typeof (className) === 'undefined') {
    className = 'ServiceTile'
  }

  return (
    <div className={className}>
        <div className='container-servicetile'>
            <div className='icon'>
                {props.svg}
            </div>
            <div className='middle-text'> {props.middleText} </div>
            <div className='bottom-text'> {props.bottomText} </div>
        </div>

    </div>
  )
}

export default ServiceTile
