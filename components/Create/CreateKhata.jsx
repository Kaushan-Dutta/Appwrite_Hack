import React,{useState,useContext} from 'react'
import { ImCross } from 'react-icons/im';
import {Data} from '../../pages/_app';
import {appwrite,databases} from '../appwrite/appwrite';
import { useRouter } from 'next/router';

const CreateKhata = ({setState}) => {

  const {loggedin,setLoggedin,id,notes,titles}=useContext(Data);
  let Name,Value;
  const router=useRouter();

  const [state,set]=useState({title:"",description:""});
  const sendData=async(e)=>{
    Name=e.target.name;
    Value=e.target.value;
    set({...state,[Name]:Value})
  }
  const createItem=async(e)=>{
    e.preventDefault();
    notes.push(state.description);
    titles.push(state.title);
    const promise = await databases.updateDocument(Database_Id,Collection_Id, id,{note:notes,title:titles});
    console.log(promise);
    window.location.reload();

  }
  return (
    <div className='w-screen h-screen bg-black opacity-90 fixed z-30 justify-center items-center flex flex-row top-0 left-0' >
    <div className=' bg-black px-5 py-3 m-auto flex flex-col rounded-md w-96 border border-rose-600 text-white' >
        <label className='flex flex-row justify-end text-white' onClick={()=>{
          setState(false)
        }}><ImCross/></label>
        <label className='my-1'><b >Title:</b></label>
        <input type='text' placeholder='Your Title...' className='border border-white py-1 px-2 bg-black text-white' name="title" value={state.title} onChange={sendData}/>
        <label className='my-1'><b >Description</b></label>
        <textarea  rows={3} className='w-full border border-white py-1 px-2 bg-black text-white' style={{resize:'none'}} placeholder='Enter the description..' name="description" value={state.description} onChange={sendData}/>
        <button className='rounded-md bg-rose-600 text-white px-5 py-2 w-40 font-mono text-lg my-2 m-auto ' onClick={createItem}> Create</button>
    </div>
    </div>
  )
}

export default CreateKhata