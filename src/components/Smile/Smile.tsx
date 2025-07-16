import React from 'react'
import SmileContent from '../SmileContent/SmileContent'
import SmileImage from '../SmileImage/SmileImage'

function Smile() {
  return (
    <div className='flex pt-[20px] bg-[#F2F2F2] px-[70px]  '>
        <div className='flex bg-[#FF5349] pr-[30px] rounded-2xl'>
        <SmileContent/>
        <SmileImage/>
        </div>
    </div>
  )
}

export default Smile