import React from 'react'
import Image from 'next/image';

function SmileImage() {
  return (
    <div className='flex justify-center items-center pt-[40px] gap-4'>

      <Image
        src="/images/smile2.png"
        alt="App Preview"
        width={300}
        height={600}
        className="rounded-lg pt-[200px] "
      />

      <Image
        src="/images/smile1.png"
        alt="App Preview"
        width={300}
        height={600}
        className="rounded-lg gap-7 relative top-2"
      />

    </div>
  )
}

export default SmileImage