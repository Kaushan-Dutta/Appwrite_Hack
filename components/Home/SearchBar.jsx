import React from 'react';


const SearchBar = () => {
  return (
    <div className='py-5 flex flex-col justify-center items-center'>

        <input type="text" placeholder='Search for the items...' className='border border-white px-5 py-2 bg-black rounded-md lg:w-1/2 md:w-3/5 sm:w-4/5 text-white'/>
        <br/><hr className=' w-10/12'/>
    </div>
  )
}

export default SearchBar