import React from 'react'
import Labresult from './Labresult'
import Medication from './Medication'

const Patientdetails = () => {
  return (
    <div className='flex flex-col w-90 gap-6 h-full'>
        <Medication />
        <Labresult />
      
    </div>
  )
}

export default Patientdetails
