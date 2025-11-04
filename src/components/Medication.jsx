import React from 'react'

const Medication = () => {
  const medications = [
    {
      id: 1,
      name: "Amlodipine",
      dosage: "5mg",
      status: "Active"
    },
    {
      id: 2,
      name: "Lisinopril",
      dosage: "10mg",
      status: "Active"
    },
    {
      id: 3,
      name: "Atorvastatin",
      dosage: "20mg",
      status: "Discontinued"
    }
  ];

  return (
    <div className='flex-1 bg-white p-5 rounded-lg shadow-md'>
      <h1 className='text-lg font-bold mb-4'>Medication</h1>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-3 font-medium text-gray-600">Medication</th>
              <th className="text-left py-2 px-3 font-medium text-gray-600">Dosage</th>
              <th className="text-left py-2 px-3 font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {medications.map((medication) => (
              <tr key={medication.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-3 font-medium text-gray-800">{medication.name}</td>
                <td className="py-3 px-3 text-gray-600">{medication.dosage}</td>
                <td className="py-3 px-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    medication.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {medication.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Medication
