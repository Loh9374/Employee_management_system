import React from 'react'
import { AcceptTask } from './AcceptTask'
import { NewTask } from './NewTask'
import { CompleteTask } from './CompleteTask'
import { FailedTsk } from './FailedTsk'

export const TaskList = ({data}) => {
   console.log(data);
  return (
    <div id='tasklist' className='flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10'>
      {data.tasks.map((elem , idx)=>{
         if(elem.active){
            return(<AcceptTask key={idx} data={elem}/>)
         }
         if(elem.new){
            return <NewTask key={idx} data={elem}/>
         }
         if(elem.completed){
            return <CompleteTask key={idx} data={elem}/>
         }
         if(elem.failed){
            return <FailedTsk key={idx} data={elem}/>
         }
      })}
        

    </div>
  )
}