import React, { useState } from 'react'
import { BsEyeFill } from 'react-icons/bs';
import DeleteKhata from '@/components/Create/DeleteKhata';
import UpdateKhata from '@/components/Create/UpdateKhata';
import ViewKhata from '@/components/Create/ViewKhata';

const Khata = ({id,title,note}) => {

  const [view,setView]=useState(false);
  const [update,setUpdate]=useState(false);
  const [del,setDel]=useState(false);
  
  const deleteKhata=()=>{
     if(view==true){
        setDel(false)
     }
     else{
        setDel(true)
     }
  }
  const updateKhata=()=>{
     if(update==true){
        setUpdate(false)
     }
     else{
        setUpdate(true)
     }
  }
  const viewKhata=()=>{
    if(view==true){
        setView(false)
    }
    else{
        setView(true)
    }
  }
  return (
    <div className='rounded-md border border-rose-600 px-5 py-2 w-80 text-white my-2 mx-2 h-36' key={id}>
       <div className='flex flex-row justify-between items-center my-1'>

         <label className=' text-lg'>{title}</label>
         <label className='flex flex-row justify-end text-lg hover:text-rose-600' onClick={viewKhata}><BsEyeFill/></label>

       </div>
         <p className='my-1 text-sm'>{note.slice(0,50)}...</p>
         <div className='flex flex-row justify-center'>
            <button className='border border-white w-1/2 px-3 py-1 text-slate-100 font-mono hover:bg-rose-600' onClick={updateKhata}>Update</button>
            <button className='border border-white w-1/2 px-3 py-1 text-slate-100 font-mono hover:bg-rose-600' onClick={deleteKhata}>Delete</button>
         </div>
         {del==true?<DeleteKhata setDel={setDel} key={id} title={title}/>:''}
         {update==true?<UpdateKhata setUpdate={setUpdate}/>:''}
         {view==true?<ViewKhata setView={setView} title={title} note={note} />:''}
    </div>
  )
}

export default Khata