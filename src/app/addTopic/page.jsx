
"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const[title,setTitle]=useState("");
  const[description,setDesc]=useState("");
  const router=useRouter();

  const handleSubmit=async(e)=>{
e.preventDefault();

if(!title || !description){
  alert("Title and Description is required");
  return ;
}

try {
  const res=await fetch("http://localhost:3000/api/topics",{
      method:"POST",
      headers: {
        "content-type":"application/json",
      },
      body: JSON.stringify({title,description}),
  })
  if(res.ok)
  {
    router.refresh();
    router.push('/')
  }else{
    throw new error("Failed to add the topic");
  }
} catch (error) {
  console.log(error);
}
  }
  return (
    <form className='flex flex-col'onSubmit={handleSubmit}>
        <input type="text" placeholder='Topic Title' className='border border-slate-500 px-8 py-2 'onChange={(e)=>setTitle(e.target.value)} value={title} />

        <input type="text" placeholder='Topic Description' className='border border-slate-500 px-8 py-2 mt-8 ' onChange={(e)=>setDesc(e.target.value)} value={description}/>
        <button type="Submit"className='bg-green-600 font-bold text-white rounded-lg px-3 py-2 shadow-lg mt-8 w-fit text-xl on hover:bg-slate-400 on hover:text-slate-800'>
        Add Topic
    </button>
    </form>
    
  )
}

export default page