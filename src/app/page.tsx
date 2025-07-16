import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Install from '@/components/Install/Install'
import Logo from '@/components/Logo/Logo'
import SaysCards from '@/components/SaysCards/SaysCards'

import Smile from '@/components/Smile/Smile'
import Spark from '@/components/Spark/Spark'
import React from 'react'

function page() {
  return (
    <>
     <Logo/>
   <Header/>
   <Hero/>
   <Spark/>
   <Install/>
   <Smile/>
   <SaysCards/>
  
    </>
  )
}

export default page