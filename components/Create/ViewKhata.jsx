import React from 'react'
import { ImCross } from 'react-icons/im';

const ViewKhata = ({setView,title,note}) => {
  return (
    <div className='w-screen h-screen bg-black opacity-90 fixed z-30 justify-center items-center flex flex-row top-0 left-0' >

    <div className=' bg-black px-5 py-3 m-auto flex flex-col rounded-md border border-rose-600 text-white' style={{maxWidth:"600px"}}>
        <label className='flex flex-row justify-end text-white' onClick={()=>{
            setView(false)
        }}><ImCross/></label>
        <p className='text-lg'><b>{title}</b></p>
        <p>{note}</p>
    </div>
    </div>
  )
}

export default ViewKhata