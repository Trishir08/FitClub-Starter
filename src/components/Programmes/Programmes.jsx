import React from 'react'
import './Programmes.css'
import { programsData } from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'

const Programmes = () => {
  return (
    <div className='programmes'>
        <div className='program-headers'>
            <span className='stroke-text'>Explore Our</span>
            <span>Programmes</span>
            <span className='stroke-text'>To Shape You</span>
        </div>        

        <div className='card'>
            {
                programsData.map((program)=>{
                   return <div className='category'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className='join-now'>
                            <span>Join Now</span>
                            <img src={rightArrow} alt=''/>
                            </div>
                    </div>
                })
                
            }
        </div>
    </div>
  )
}

export default Programmes