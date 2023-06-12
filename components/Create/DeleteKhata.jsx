import React, { useContext } from 'react'
import { ImCross } from 'react-icons/im';
import {Data} from '../../pages/_app';
import {account,databases} from '../appwrite/appwrite';

const DeleteKhata = ({setDel,key,title}) => {

  const {loggedin,setLoggedin,id,notes,titles}=useContext(Data);
  const deleteItem=async(e)=>{
    e.preventDefault();
    notes.splice(key,1);
    titles.splice(key,1);
    const promise = await databases.updateDocument(Database_Id,Collection_Id, id,{note:notes,title:titles});
    console.log(promise);
    window.location.reload();
  }

  return (
    <div className='w-screen h-screen bg-black opacity-90 fixed z-30 justify-center items-center flex flex-row top-0 left-0' >

    <div className=' bg-black px-5 py-3 m-auto flex flex-col rounded-md w-96 border border-rose-600 text-white' >
        <label className='flex flex-row justify-end text-white' onClick={()=>{
            setDel(false)
        }}><ImCross/></label>
        <p className='my-1 text-center'>Are You sure you want to delete&nbsp; {title}</p>
        
        <div className='flex flex-row w-full justify-center items-center my-2'>
        <button className='border border-white w-1/2 px-5 py-2 text-slate-100 font-mono hover:bg-rose-600' onClick={deleteItem}>Yes</button>
        <button className='border border-white w-1/2 px-5 py-2 text-slate-100 font-mono hover:bg-rose-600'onClick={()=>{
            setDel(false)
        }} >No</button>
      </div>    
    </div>
    </div>
  )
}

export default DeleteKhata