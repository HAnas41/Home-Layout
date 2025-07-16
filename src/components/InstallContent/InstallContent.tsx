import React from 'react'
import Image from 'next/image';

function InstallContent() {
  return (
    <div>
        <h1 className='text-5xl   justify-center text-center'>How to Install Our App</h1>
        <p className='justify-center text-center pt-2 '>Getting started is quick and easy! Follow these simple steps 
            to install and start using MyBindle today.</p>
          <div className='flex justify-center items-center pt-4'>
            
            <Image
                    src="/images/number.png"
                    alt="App Preview"
                    width={900}
                    height={700}
                    
                  />

            </div>  
    </div>
    
  )
}

export default InstallContent