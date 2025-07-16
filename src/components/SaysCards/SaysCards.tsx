
import React from 'react'
import SaysCard from '../SaysCard/SaysCard'
import Image from 'next/image'
import SaysHeading from '../SaysHeading/SaysHeading'

function SaysCards() {
  return (
    <div className=''>
        <SaysHeading/>
        <SaysCard/>
      {/* <div className='flex justify-center gap-120'>
                      <div className='text-sm'>
                        <p className='w-[220px]'>This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones, every moment here feels special</p>
                      </div>
                      <div>
                        <p className='w-[220px]'>A social network that actually listens to its users! The design is sleek, the features are powerful, and the experience is seamless. I’m hooked!</p></div>
                      </div> */}
                      {/* 2div close */}


                      {/* parent div */}
                      <div>
                          {/* card1      child */}
                        <div className='flex flex-col gap-2 px-4 py-5 bg-[#F2F2F2] rounded-2xl shadow-lg '>
                            <div className='w-[260px] text-sm '><p>This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones, every moment here feels special</p></div>
                            <div className='flex gap-2  items-center'>
                              <div>
                              <Image
                              src={`/images/customer-1 1 (1).png`}
                              alt='Card'
                              width={30}
                              height={20}
                              className='rounded-full'
                              />
                              </div>
        
                              <div className='flex-col text-sm'>
                              <p>Patrick</p>
                              <p className='text-[#828487] text-[12px]'>Product Designer at COVEO</p>
                              </div>
        
                            </div>
                            {/* button */}
                            <div><button>See More</button></div>
                           <div>

                           </div>
                        </div>
                        {/* card2 child */}
                          <div className='flex flex-col gap-2 px-4 py-5 bg-[#F2F2F2] rounded-2xl shadow-lg'>
                            <div className='w-[260px] text-sm '><p>A social network that actually listens to its users! The design is sleek, the features are powerful, and the experience is seamless. I’m hooked!</p></div>
                            <div className='flex gap-2  items-center'>
                              <div>
                              <Image 
                              src={`/images/olena-sergienko-XttWKETqCCQ-unsplash 1 (1).png`}
                              alt='Card'
                              width={30}
                              height={20}
                              className='rounded-full'
                              />
                              </div>
        
                              <div className='flex-col text-sm'>
                              <p>Patrick</p>
                              <p className='text-[#828487] text-[12px]'>Product</p>
                              </div>
        
                            </div>
                           
                        </div>

                    </div>
        
                    
    </div>
  )
}

export default SaysCards
