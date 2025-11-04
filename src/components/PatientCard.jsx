import React from 'react'

const PatientCard = () => {
    return (
        <div className='w-80 bg-white p-6 rounded-lg shadow-lg'>
            {/* Profile Section */}
            <div className='flex flex-col items-center gap-3'>
                <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img 
                        src="https://t4.ftcdn.net/jpg/02/70/34/31/240_F_270343143_8pIbNFLxRNAEfK8uQv8JRpLtR9X9nlIm.jpg" 
                        alt="Patient Profile" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <h2 className='text-xl font-semibold text-gray-800'>Jessica Taylor</h2>
            </div>

            {/* Patient Information */}
            <div className='mt-6 space-y-4'>
                {/* Date of Birth */}
                <div className='flex items-center gap-3'>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="ri-calendar-line text-gray-600"></i>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>Date Of Birth</p>
                        <p className='text-sm font-medium text-gray-800'>August 23, 1986</p>
                    </div>
                </div>

                {/* Gender */}
                <div className='flex items-center gap-3'>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="ri-women-line text-gray-600"></i>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>Gender</p>
                        <p className='text-sm font-medium text-gray-800'>Female</p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className='flex items-center gap-3'>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="ri-phone-line text-gray-600"></i>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>Contact Info</p>
                        <p className='text-sm font-medium text-gray-800'>(415) 555-1234</p>
                    </div>
                </div>

                {/* Emergency Contacts */}
                <div className='flex items-center gap-3'>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="ri-phone-line text-gray-600"></i>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>Emergency Contacts</p>
                        <p className='text-sm font-medium text-gray-800'>(415) 555-5678</p>
                    </div>
                </div>

                {/* Insurance Provider */}
                <div className='flex items-center gap-3'>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="ri-shield-line text-gray-600"></i>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>Insurance Provider</p>
                        <p className='text-sm font-medium text-gray-800'>Sunrise Health Assurance</p>
                    </div>
                </div>
            </div>

            {/* Show All Information Button */}
            <div className='mt-4'>
                <button className='w-full bg-cyan-400 text-black py-2 px-4 rounded-full font-medium hover:bg-cyan-500 transition-colors'>
                    Show All Information
                </button>
            </div>
        </div>
    )
}

export default PatientCard
