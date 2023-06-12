import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import {account,databases} from '../components/appwrite/appwrite';
import { useRouter } from 'next/router'
import { Query } from 'appwrite';
import {v4 as uuidv4} from 'uuid';
import React,{useState,useEffect,createContext} from 'react';

export const Data=createContext();



export default function App({ Component, pageProps }) {

  const router=useRouter();
  const [loggedin,setLoggedin]=useState(false);
  const [email,setEmail]=useState();
  const [id,setId]=useState();
  const [notes,setNotes]=useState([]);
  const [titles,setTitles]=useState([]);

  useEffect(()=>{
    
    const loadContents=async()=>{
      try{
      const res=await account.get();
      console.log(res.email);
      if(res.email){
          try{
            const fetch=await databases.listDocuments(Database_Id,Collection_Id,[
            
                Query.equal('email', [res.email])
          
            ])

            if(!fetch.documents.length){
              const create=await databases.createDocument(Database_Id,Collection_Id,uuidv4(),{email:res.email});
              console.log(create);
            }
            
            
            
          }
          catch(err){
            
            //console.log(create); 
            console.log("/////////////////",err);
            //router.push('/yourKhata');
          }
          
      } 
      setEmail(res.email);

      }
      catch(err){
         console.log("User is not Logged In");
       }
    }
    loadContents();
  },[])

  useEffect(()=>{
    const loadContents=async()=>{
      if(loggedin){
        router.push('/yourKhata');
      }
      else{
        router.push('/')
      }
    }
    loadContents();
  },[loggedin])

  useEffect(()=>{
    
    const loadContents=async()=>{
      try{
        const fetch=await databases.listDocuments(Database_Id,Collection_Id,[
                
            Query.equal('email', [email])
      
        ])
        const id=fetch.documents[0].$id;
        const promise = await databases.getDocument(Database_Id,Collection_Id, id);
        console.log(promise)

        setId(id);
        setNotes(promise.note);
        setTitles(promise.title);
        setLoggedin(true);

      }
      catch(err){
        console.log(err);
      }
    }
    loadContents();
  },[email]) 

  return <>
    <Data.Provider value={{loggedin,setLoggedin,id,notes,titles}}>
      <Navbar/>
      <Component {...pageProps} />
    </Data.Provider>
  </>
}
