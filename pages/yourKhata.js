import React,{useEffect,useState,useContext} from 'react'
import SearchBar from '@/components/Home/SearchBar';
import Display from '@/components/Home/Display';
import Logout from '@/components/Logout';
import CreateKhata from '@/components/Create/CreateKhata';
import {account,databases} from '../components/appwrite/appwrite';
import { useRouter } from 'next/router'
import { Query } from 'appwrite';
import {v4 as uuidv4} from 'uuid';
import { Data } from './_app';

const create = () => {
  
  const {loggedin,setLoggedin}=useContext(Data);
  const router=useRouter();
  
  useEffect(()=>{
    const loadContents=async()=>{
      if(!loggedin){
        router.push('/')
      }
    }
    loadContents();
  },[])

  return (
    <div className='bg-black pt-20  px-5 min-h-screen overflow-hidden'>

        <SearchBar/>

        {/* <div className=' flex flex-row justify-center w-full my-3 '>

          <DeleteKhata/>
          <ViewKhata/>
          <UpdateKhata/>

        </div> */}
        
        <Display/>
        <Logout/>

    </div>
  )
}

export default create