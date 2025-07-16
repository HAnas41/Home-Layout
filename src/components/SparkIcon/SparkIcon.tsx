import { sparkicon } from '@/utils/helper/helper'
import React from 'react'

function SparkIcon() {
  return (
    <div className='flex flex-col items-start gap-3  '>
   {
        sparkicon.map((e,i) => {
            return(
                <div className='shadow p-4 rounded-md '>
                    <h3 className='font-bold pb-3  '>{e.title}</h3>
                    <p className='text-sm w-[500px]'>{e.discription}</p>
                </div>
            )
        })    
   }

    </div>
  )
}

export default SparkIcon