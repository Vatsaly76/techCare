import React from 'react'

const Diagnosis = () => {
  return (
    <div className='h-145 w-1/2 bg-white p-4 rounded-lg shadow-md'>
        <h1 className='text-lg font-bold'>Diagnosis History</h1>
        <div className='h-67 w-173 bg-white mt-4 rounded-lg overflow-hidden shadow-md'>
            <img src="./public/dh.png" alt="" />
        </div>
        <div className='flex gap-4'>
            <div className='h-50 w-55 bg-white mt-4 rounded-lg overflow-hidden shadow-md'>
                <img src="./public/rp.png" alt="" />
            </div>
            <div className='h-50 w-55 bg-white mt-4 rounded-lg overflow-hidden shadow-md'>
                <img src="./public/tp.png" alt="" />
            </div>
            <div className='h-50 w-55 bg-white mt-4 rounded-lg overflow-hidden shadow-md'>
                <img src="./public/Hr.png" alt="" />
            </div>
        </div>

      
    </div>
  )
}

export default Diagnosis
