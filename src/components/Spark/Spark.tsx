import React from 'react'
import SparkContent from '../SparkContent/SparkContent'
import SparkImage from '../SparkImage/SparkImage'
import SparkIcon from '../SparkIcon/SparkIcon'

function Spark() {
  return (
    <section className='flex justify-evenly py-10 -z-50 '>
        
    <SparkImage/>
    <div className='flex flex-col gap-3 items-center'>
    <SparkContent/>
    <SparkIcon/>
    </div>
    </section>
  )
}

export default Spark