import React from 'react'
import { ImCross } from 'react-icons/im';

const UpdateKhata = ({setUpdate}) => {
  return (
    <div className='w-screen h-screen bg-black opacity-90 fixed z-30 justify-center items-center flex flex-row top-0 left-0' >

    <div className=' bg-black px-5 py-3 m-auto flex flex-col rounded-md w-96 border border-rose-600 text-white' >
        <label className='flex flex-row justify-end text-white' onClick={()=>{
            setUpdate(false)
        }}><ImCross/></label>
        <label className='my-1'><b >Title:</b></label>
        <input type='text' placeholder='Your Title...' className='border border-white py-1 px-2 bg-black text-white'/>
        <label className='my-1'><b >Description</b></label>
        <textarea  rows={3} className='w-full border border-white py-1 px-2 bg-black text-white' style={{resize:'none'}} placeholder='Enter the description..'/>
        <button className='rounded-md bg-rose-600 text-white px-5 py-2 w-40 font-mono text-lg my-2 m-auto '>Update</button>
    </div></div>
  )
}

export default UpdateKhata