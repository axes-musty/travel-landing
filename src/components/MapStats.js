import React from 'react'
import '../css/mapstats.css'
import worldmap from '../img/worldmap.png'
import StatsTile from './StatsTile'
import * as Svgs from './Svgs'
const MapStats = () => {
  return (
    <div className='outer-container-ms'>
    <div className='wrapper-ms'>
        <img
            className="bg-ms"
            src={worldmap}
            alt=""
        ></img>
        <div className='separator-ms'>
            <div className='container-ms'>
                <div className='text-box-main-ms'>
                    We always try to give you <br></br> the best service
                </div>
                <div className='text-box-low-ms'>
                    We always try to make our customer Happy. We provide all kind of <br></br> facilities. Your Satisfaction is our main priority.
                </div>
                <div className='tiles-ms'>
                    <StatsTile svg={<Svgs.Calendar />} middleText='15+' bottomText='Years of Experience'/>
                    <StatsTile svg={<Svgs.Graph />} middleText='15k+' bottomText='Happy Travelers'/>
                    <StatsTile svg={<Svgs.CarbonMap />} middleText='650+' bottomText='Places Visisted'/>
                    <StatsTile svg={<Svgs.History />} middleText='2k+' bottomText='Travel History'/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MapStats
