/* eslint-disable react/prop-types */
import React from 'react'
import '../css/mapstats.css'
/* import * as Svgs from './Svgs' */

const StatsTile = (props) => {
  return (
   <div className='tile-ms'>
      <div className='icon-ms'>
        {props.svg}
      </div>
      <div className='middle-text-ms'> {props.middleText} </div>
      <div className='bottom-text-ms'> {props.bottomText} </div>
    </div>
  )
}

export default StatsTile
