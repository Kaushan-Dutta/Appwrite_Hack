import React,{useState} from 'react';
import Login from '@/components/Login';
import SignUp from '@/components/Signup';

const index = () => {
  const [state,setState]=useState("Login");

  const changeState=()=>{
    if(state=="Login"){
      setState("SignUp")
    }
    else{
      setState("Login")
    }
  }
  return (
    <div className=' bg-black h-screen flex flex-col justify-center items-center'>
      
      <div className='flex flex-row lg:w-96 md:w-80 sm:w-80 justify-between items-center my-2'>
        <button className='border border-white w-1/2 px-5 py-2 text-slate-100 font-mono' onClick={changeState} style={{backgroundColor:state=="Login"?"#F02E65":""}}>Login</button>
        <button className='border border-white w-1/2 px-5 py-2 text-slate-100 font-mono' onClick={changeState} style={{backgroundColor:state=="SignUp"?"#F02E65":""}}>SignUp</button>
      </div>
      {state=="Login"?<Login/>:<SignUp/>}
    </div>
  )
}

export default index