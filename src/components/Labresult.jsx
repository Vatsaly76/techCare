import React from 'react'

const Labresult = () => {
  return (
    <div className='flex-1 bg-white p-5 rounded-lg shadow-md'>
        <h1 className='text-lg font-bold'>Lab Results</h1>
        <div className='mt-4 flex justify-between p-2 border-b border-gray-200 hover:bg-gray-100'>
            <h1 className='font-semibold'>Blood Test</h1>
            <i className="ri-download-line"></i>
        </div>
        <div className='flex justify-between p-2 border-b border-gray-200 hover:bg-gray-100'>
            <h1 className='font-semibold'>CT Scan</h1>
            <i className="ri-download-line"></i>
        </div>
        <div className='flex justify-between p-2 border-b border-gray-200 hover:bg-gray-100'>
            <h1 className='font-semibold'>X-Ray</h1>
            <i className="ri-download-line"></i>
        </div>
        <div className='flex justify-between p-2 border-b border-gray-200 hover:bg-gray-100'>
            <h1 className='font-semibold'>MRI</h1>
            <i className="ri-download-line"></i>
        </div>
    </div>
  )
}

export default Labresult
