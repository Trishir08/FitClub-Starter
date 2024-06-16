import React from 'react'
import './Plan.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plan = () => {
  return (
    <div className='plans-container'>
        <div className='plans-header' style={{gap : '2rem' , fontSize : '3rem'}}>
            <span className='stroke-text'>READY TO START</span>
            <span style={{color:"white" , fontWeight:"bold"}}> YOUR JOURNEY</span>
            <span className='stroke-text'> NOW WITH US</span>
        </div>

        <div className='plans'>
            {
                plansData.map((plan , i)=>{
                   return <div className='plan' key={i}>
                        {plan.icon} 
                        <span>{plan.name}</span>
                        <span>{plan.price}</span>

                        <div className='features'>
                        {
                            plan.features.map((feature , i)=>{
                                return <div className='feature'>
                                    <img src={whiteTick} alt=''/>
                                    <span key={i}>{feature}</span>
                                </div>
                            })
                        }
                        </div>

                    <div>
                         <span>See more Benefits</span>   
                    </div>  
                     <button className='btn'>Join Now</button>   
                    </div>
                })
            }

        </div>

    </div>
  )
}

export default Plan