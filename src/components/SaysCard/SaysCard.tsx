import { card } from '@/utils/helper/helper'
import Image from 'next/image'
import React from 'react'
import { IoStarSharp } from 'react-icons/io5'

function SaysCard() {
  return (
    <div className='flex justify-center flex-wrap gap-8 pt-[40px] bg-[#F2F2F2]'>
      {
        card.map((e,i)=>{
            return(

                <div key={i} className='flex flex-col gap-2 px-4 py-5 bg-[#F2F2F2] rounded-2xl shadow-lg'>
                    <div className='flex text-[#FACC15]'>
                    <IoStarSharp/> 
                    <IoStarSharp /> 
                    <IoStarSharp /> 
                    <IoStarSharp /> 
                    <IoStarSharp />
                    </div>
                    <div className='w-[260px] text-sm '>{e.descrition}</div>
                    <div className='flex gap-2  items-center'>
                      <div>
                      <Image
                      src={e.Img}
                      alt='Card'
                      width={30}
                      height={20}
                      className='rounded-full'
                      />
                      </div>

                      <div className='flex-col text-sm'>
                      <p>{e.name}</p>
                      <p className='text-[#828487] text-[12px]'>{e.country}</p>
                      </div>

                    </div>
                   
                </div>
            )
        })
      }

       {/* 2div open  ha last wale  */}
                    
    </div>
  )
}

export default SaysCard