import React,{useContext} from 'react'
import {account} from '../components/appwrite/appwrite';
import { useRouter } from 'next/router'
import {v4 as uuidv4} from 'uuid';
import { Data } from '@/pages/_app';

const Logout = () => {

  const router=useRouter();
  const {loggedin,setLoggedin}=useContext(Data);

  const logout=async(e)=>{
    e.preventDefault()
    try{
      const res=await account.deleteSessions();console.log(res);
      setLoggedin(false);
   }
   catch(err){
    console.log(err);
   }
  }

  return (
    <div className='flex flex-row justify-center w-11/12 m-auto  '>
        <button className='px-10 py-3 text-white text-lg font-mono rounded-lg bg-rose-600 my-5' onClick={logout}>Logout👋</button>
    </div>
  )
}

export default Logout