import React from 'react'
import ServiceTile from './ServiceTile'
import '../css/ourservice.css'
import * as Svgs from './Svgs'

const OurService = () => {
  return (
    <div id='OurService' className='container'>
      <div className='header-text'>
        Our Service
      </div>
      <div className='row'>
        <ServiceTile
          middleText = 'Ticket Booking'
          bottomText = 'We book all kind of national or international ticket for your destinaion.'
          svg = {<Svgs.Ticket />}
          />
        <ServiceTile
          middleText = 'Hotel Booking'
          bottomText = 'You can easily book your according to yourbudget hotel by our website.'
          svg = {<Svgs.Hotel />}
          className='ServiceTileMid'
        />
        <ServiceTile
          middleText = 'Your Plan'
          bottomText = 'We provide you the best plan within a short time explore more.'
          svg = {<Svgs.Plane />}
          />
      </div>
    </div>
  )
}

export default OurService
