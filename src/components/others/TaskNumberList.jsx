import React from 'react'

export const TaskNumberList = ({data}) => {
  return (
    <div className='flex mt-10 screen gap-5 justify-between'>
      <div className='rounded-xl h-p-10 bg-red-400  w-[45%] py-6 px-9'>
        <h2 className='text-3xl font-semibold'>{data.taskSummary.new}</h2>
        <h3 className='text-xl font-medium'>new task</h3>
      </div>

      <div className='rounded-xl h-p-10 bg-blue-400  w-[45%] py-6 px-9'>
        <h2 className='text-3xl font-semibold'>{data.taskSummary.active}</h2>
        <h3 className='text-xl font-medium'>active task</h3>
      </div>

      <div className='rounded-xl h-p-10 bg-green-400  w-[45%] py-6 px-9'>
        <h2 className='text-3xl font-semibold'>{data.taskSummary.completed}</h2>
        <h3 className='text-xl font-medium'>completed task</h3>
      </div>

      <div className='rounded-xl h-p-10 bg-yellow-400  w-[45%] py-6 px-9'>
        <h2 className='text-3xl font-semibold'>{data.taskSummary.failed}</h2>
        <h3 className='text-xl font-medium'>failed task</h3>
      </div>
    </div>
  )
}
