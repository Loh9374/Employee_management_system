import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvide'

export const AllTask = () => {
  const authData = useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-60 '>
      
          <div className='mb-2 bg-red-400 py-2 px-4 flex justify-between rounder'>
            <h3 className='text-lg font-medium w-1/5 '>new task</h3>
            <h2 className='text-lg font-medium w-1/5 '>Employee name</h2>
            <h5 className='text-lg font-medium w-1/5 '> active task</h5>
            <h5 className='text-lg font-medium w-1/5 '> completed</h5>
            <h5 className='text-lg font-medium w-1/5 '> failed</h5>
          </div>
        
      
      <div className=''>
        {authData.employees.map((elem,idx) => {
        return (
          <div key={idx} className=' mb-2 border border-emerald-400  py-2 px-4 flex justify-between rounder'>
            <h2 className='text-lg font-medium w-1/5 text-white-600'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskSummary.new}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{elem.taskSummary.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white-600'> {elem.taskSummary.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'> {elem.taskSummary.failed}</h5>
          </div>
        )
      })}
      </div>

    </div>
  )
}
