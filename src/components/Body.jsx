import React from 'react'
import Diagnosis from './Diagnosis'
import PatientCard from './PatientCard'
import Patientdetails from './Patientdetails'

const Body = () => {
  return (
    <div className='flex gap-6 p-4 mt-2 mr-4 ml-4 h-[80vh]'>
        <Diagnosis />
        <PatientCard />
        <Patientdetails />
      
    </div>
  )
}

export default Body
