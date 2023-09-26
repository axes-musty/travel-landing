import React from 'react'
import '../css/landing.css'
import * as Svgs from './Svgs'

const Landing = () => {
  return (
    <div className='container-p1' id='PageOne'>
        <div className='gradient'>
            <div className='topbar'>
                <div className='travel'>
                  Travel
                </div>
                <div className='navbar'>
                  <a href="#Landing" className='link-navbar'>Home</a>
                  <a href="#OurService" className='link-navbar'>About Us</a>
                  <a href="#OurService" className='link-navbar'>Packages</a>
                </div>
                <div className='right-icons'>
                  <Svgs.Star />
                  <Svgs.UserCircle />
                </div>
            </div>
            <div className='container-mid'>
              <div className='text-box-main'>
                Your Imagination Is <br></br> Your Only Limit
              </div>
              <div className='text-box-low'>
                We always try to make our customer Happy. We provide all kind of facilities. <br></br>
                Your Satisfaction is our main priority
                <a href="#OurService" className="btn1">Discover more</a>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Landing
