import React,{useEffect,useState,useContext} from 'react'
import { FcGoogle } from 'react-icons/fc';
import {account} from '../components/appwrite/appwrite';
import { useRouter } from 'next/router';
import { Data } from '@/pages/_app';


const Login = () => {

  const [user,setUser]=useState({email:"",password:""});
  const {loggedin,setLoggedin}=useContext(Data);

  const router=useRouter();
  
  let Name="",Value="";

    const createUser=async(e)=>{
      Name=e.target.name;
      Value=e.target.value;
      setUser({...user,[Name]:Value});
   }
  const sendInfo=async(e)=>{
    e.preventDefault();
    try{
    
    const promise = await account.createEmailSession(user.email, user.password);
    console.log(promise);
    setLoggedin(true);
  }
    catch(err){
      console.log(err)
    }
  }
  const googleLogin=async(e)=>{
    e.preventDefault();
    try{
       const res=await account.createOAuth2Session('google','http://localhost:3000/yourKhata','http://localhost:3000/');
       console.log(res);

    }
    catch(err){
      console.log(err);
    }
 }
  return (
    <div className='flex flex-col lg:w-96 md:w-80 justify-between border border-white px-5 py-3'>
       <input type="email" placeholder='Your Email..' className='px-2 my-2 py-2 border border-white w-full bg-black text-white font-mono ' value={user.email} onChange={createUser} name="email"/>
       <input type="password" placeholder='Your password' className='px-2 my-2 py-2 border border-white w-full bg-black text-white font-mono ' value={user.password} onChange={createUser} name="password"/>
       <button className='w-60 m-auto text-xl text-white font-mono py-1 rounded-md' style={{backgroundColor:"#F02E65"}} onClick={sendInfo}>Login</button>
       <br/><hr className=''/>
       <button className='w-40 m-auto text-md text-white font-mono py-1 rounded-md flex flex-row justify-center items-center border border-white my-5' onClick={googleLogin}>Google Login&nbsp;<FcGoogle/></button>
    </div>
  )
}

export default Login