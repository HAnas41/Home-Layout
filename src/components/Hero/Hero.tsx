import React from 'react'
import HeroContent from '../HeroContent/HeroContent'
import HeroBox from '../HeroBox/HeroBox'


function Hero() {
  return (
    <div className='bg-[#F2F2F2] flex flex-col justify-center items-center gap-3'>
    <HeroContent/>
    <HeroBox/>
    </div>
  )
}

export default Hero