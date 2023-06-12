import React, { useState } from 'react'
import { GiNotebook } from 'react-icons/gi';
import CreateKhata from '@/components/Create/CreateKhata';

const Navbar = () => {
  const [state,setState]=useState(false);
  const createKhata=()=>{

     if(state==true){setState(false)}
     else{setState(true)}

  }
  return (
    <div>
        <nav className="px-4 py-4 bg-black flex justify-center w-full absolute">
            <div className="w-11/12 md:hidden rounded-md flex flex-row justify-between px-5 py-2 items-center bg-black shadow-md border border-gray-400">
               <p className='text-3xl  text-white' ><GiNotebook/></p>
               <button className='px-5 py-2 text-lg font-mono text-white rounded-3xl' style={{backgroundColor:'#F02E65'}}><b>Create</b></button>
            </div>
            <div className=" w-11/12 hidden md:flex rounded-md flex-row justify-between px-5 py-2 items-center bg-black shadow-md border border-gray-400">
               <p className='text-3xl  text-white'><b>khata<span style={{color:'#F02E65'}}>App</span></b></p>
               <button className='px-5 py-2 text-lg font-mono text-white rounded-3xl' style={{backgroundColor:'#F02E65'}} onClick={createKhata}><b>Create</b></button>
            </div>
      </nav>
      {state==true?<CreateKhata setState={setState}/>:''}
    </div>
  )
}

export default Navbar