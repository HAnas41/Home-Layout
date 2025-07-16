import React from 'react'
import Image from 'next/image';
function SparkImage() {
  return (
    <div className=' relative '>
    {/* <div className='absolute left-45 z-20'> */}
         {/* <Image
                src="/images/spark1.png"
                alt="App Preview"
                width={300}
                height={700}
                className="absolute left-45 z-20 rounded-lg"
              /> */}
               <Image
                src="/images/spark2.png"
                alt="App Preview"
                width={260}
                height={400}
                className="absolute top-24"
              />
              
    {/* </div> */}
    {/* <div className="absolute top-2 left-3 md:bottom-0 md:left-4 w-1/2"> */}
        {/* <Image
                src="/images/spark2.png"
                alt="App Preview"
                width={260}
                height={400}
                className="rounded-lg h-[350px] absolute top-2 left-3 md:bottom-0 md:left-4 "
              /> */}
             

              <Image
                src="/images/spark1.png"
                alt="App Preview"
                width={350}
                height={100}
                className="relative left-28 top-16 "
              />
             
    {/* </div> */}
    {/* <div className='absolute -z-10 left-5 top-10'> */}
         {/* <Image
                src="/images/phonebackground.png"
                alt="App Preview"
                width={400}
                height={500}
                className="rounded-lg h-[350px] absolute -z-10 left-5 top-10"
              /> */}
                <Image
                src="/images/phonebackground.png"
                alt="App Preview"
                width={400}
                height={300}
                className="relative -z-10 bottom-[400px] -left-2"
              />
    {/* </div> */}
    </div>
  )
}

export default SparkImage