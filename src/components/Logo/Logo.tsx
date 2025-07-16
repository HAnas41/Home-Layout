import React from 'react'
import Image from 'next/image';

function Logo() {
  return (
    <div className='flex justify-center items-center py-3   text-white bg-[#FF5349] '>
        <Image
                src="/images/logo.png"
                alt="App Preview"
                width={300}
                height={300}
                className="rounded-lg max-[400px]:w-[150px] max-[300px]:w-[120px]"
              />
    </div>
  )
}

export default Logo