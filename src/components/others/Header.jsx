import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage';

function Header  (props)  {

  const logout = ()=>{
    localStorage.setItem("loggedInuser","")
    // window.location.reload()
    props.changeUser("");
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-semibold'>hello <br/> <span className='text-3xl'>jenish</span></h1>
        <button onClick={logout} className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium'> Log out</button>
    </div>
  )
}
export default Header;