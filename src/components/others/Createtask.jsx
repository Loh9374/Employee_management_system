import React, { useState } from 'react'

export const Createtask = () => {
  const [taskTitle , settaskTitle] = useState("");
  const [taskDescription , settaskDescription] = useState("");
  const [taskDate , settaskDate] = useState("");
  const [assignTo , setassignTo] = useState("");
  const [category,setcategory] = useState("")
  const [newtask ,setnewtask] =useState([]);

  const submitHandler = (e)=>{
    e.preventDefault();
    settaskTitle("");
    settaskDescription("");
    settaskDate("");
    setassignTo("");
    setcategory("");

    setnewtask({taskTitle,taskDescription,taskDate,assignTo,category,active:false,newtask:true,failed:false,completed:false})

    const data = JSON.parse(localStorage.getItem("employees"))
    data.forEach((elem)=>{
      if(assignTo == elem.firstName){
        elem.tasks.push(newtask);
        console.log(elem);
      }
    })
    localStorage.setItem("employees",JSON.stringify(data))

    // console.log(taskTitle,taskDescription,taskDate,assignTo,category);
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start '>
          <div className='w-1/2'>
            <div className='mb-3'>
              <h3>Task Title</h3>
              <input 
              value={taskTitle}
              onChange={(e)=>{
                settaskTitle(e.target.value);
              }}
              className='w-[50%] border h-10 rounded p-2 text-white bg-transparent border-white' type='text' placeholder='make a ui design' />
            </div>
            <div className='mb-3'>
              <h3>Date</h3>
              <input 
              value={taskDate}
              onChange={(e)=>{
                settaskDate(e.target.value);
              }}
              className='w-[50%] border h-10 rounded p-2 text-white bg-transparent border-white' type='date' />
            </div>
            <div className='mb-3'>
              <h3>Assign to</h3>
              <input
              value={assignTo}
              onChange={(e)=>{
                setassignTo(e.target.value);
              }}
              className='w-[50%] border h-10 rounded p-2 text-white bg-transparent border-white' type='text' placeholder='employee name' />
            </div>
            <div className='mb-3'>
              <h3>Category</h3>
              <input 
              value={category}
              onChange={(e)=>{
                setcategory(e.target.value);
              }}
              className='w-[50%] border h-10 rounded p-2 text-white bg-transparent border-white' type='text' placeholder='design dev,etc' />
            </div>
          </div>

          <div>
            <h3>Description</h3>
            <textarea 
            value={taskDescription}
              onChange={(e)=>{
                settaskDescription(e.target.value);
              }}
            className='w-full p-5 bg-transparent border rounded-lg border-white' name='' id='' cols='30' rows='10'></textarea>
            <button className='bg-green-500 w-full h-10 border rounded'>create task</button>
          </div>

          
        </form>
      </div>
  )
}
