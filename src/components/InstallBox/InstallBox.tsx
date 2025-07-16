import { installicon } from '@/utils/helper/helper'
import React from 'react'

function InstallBox() {
  return (
    <div className=" flex justify-center flex-wrap rounded   gap-4" >
        {installicon.map((e,i) => {
            return(
              <div className="flex flex-col items-center rounded-4xl text-center p-8 gap-3 shadow-md">
                <h3 className="text-2xl font-bold ">{e.tittle}</h3>
                <p className="text-gray-700 text-sm leading-relaxed w-[300px]">{e.discription}</p>
              </div>
            )
        })}
    </div>
  )
}

export default InstallBox