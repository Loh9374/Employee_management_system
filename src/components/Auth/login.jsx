import React, { useState } from 'react';

function Login(props) {


    
    let [email,setemail] = useState('');
    let [password,setpassword] = useState("");

    function submitHandler(e){
        e.preventDefault();
        props.handleLogin(email,password);
        setemail("");
        setpassword("");
    }
     

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 rounded-xl border-emerald-600 p-2'>
        <form 
        onSubmit={submitHandler}
        className='flex flex-col items-center justify-center space-y-4 p-6'>
          <input required
          value={email}
          onChange={(e)=>{
            setemail(e.target.value)
          }}
            className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400'
            type='email'
            placeholder='Enter your email'
          />
          <input required
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value)
          }}
            className='text-white outline-none bg-transparent border-2 mt-3 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400'
            type='password'
            placeholder='Enter your password'
          />
          <button className='bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700'>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
