import React,{useState,useEffect,useContext} from 'react'
import Khata from './Khata'

import {account,databases} from '../../components/appwrite/appwrite';
import { useRouter } from 'next/router'
import { Query } from 'appwrite';
import {v4 as uuidv4} from 'uuid';
import { Data } from '../../pages/_app';

const Display = () => {

  const {loggedin,setLoggedin,id,notes,titles}=useContext(Data);
  

  return (
    <div className='flex flex-row justify-center items-center flex-wrap'>
        {titles.map((object,id)=>{
          console.log("...............",object,id)
          return(
            <Khata id={id} title={object} note={notes[id]} />)
         })}
    </div>
  )
}

export default Display