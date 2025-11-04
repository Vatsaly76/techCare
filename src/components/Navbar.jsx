import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md mr-4 ml-4 rounded-full">
      <div className="flex items-center h-12 w-30 object-cover">
        <img src="./techcare.png" alt="" />
      </div>
      <div className="flex gap-8 ">
        <h2><i class="ri-home-4-line"></i> Overview</h2>
        <h2 className='bg-cyan-400 rounded-full p-1 overflow-hidden'><i class="ri-group-line"></i> Patients</h2>
        <h2><i class="ri-calendar-line"></i> Schedule</h2>
        <h2><i class="ri-message-2-line"></i> Message</h2>
        <h2><i class="ri-bank-card-2-line"></i> Transaction</h2>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="https://img.freepik.com/free-photo/female-doctor-hospital_23-2148827760.jpg" alt="" />
        </div>
        <div>
            <h6 className='text-sm font-bold'>Dr. Sarah Johnson</h6>
            <p className='text-sm text-gray-500'>Cardiologist</p>
        </div>
        <i class="ri-settings-3-line text-2xl"></i>
        <i class="ri-more-2-fill text-2xl"></i>
      </div>
    </div>
  )
}

export default Navbar
