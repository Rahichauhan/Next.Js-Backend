"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const EditTopicForm = ({id,title,description}) => {
  const[newtitle,setTitle]=useState(title);
  const[newDesc,setDesc]=useState(description);
  const router=useRouter();
  const handleSubmit=async(e)=>{
e.preventDefault();
try {
  const res=await fetch(`http://localhost:3000/api/topics/${id}`,{
    method:"PUT",
    headers:{
      "Content-type":"application/json",
    },
    body:
    JSON.stringify({newtitle,newDesc}),

  })
  if(!res.ok)
  {
    throw new error("Failed to update topic")
  }
  router.refresh();
router.push("/")
} catch (error) {
  console.log(error);
}


  }

  return (
   
    <form className='flex flex-col'onSubmit={handleSubmit}>
        <input type="text" placeholder='Topic Title' className='border border-slate-500 px-8 py-2 ' onChange={(e)=>setTitle(e.target.value)} value={newtitle} />

        <input type="text" placeholder='Topic Description' className='border border-slate-500 px-8 py-2 mt-8 ' onChange={(e)=>setDesc(e.target.value)} value={newDesc}/>
        <button className='bg-green-600 font-bold text-white rounded-lg px-3 py-2 shadow-lg mt-8 w-fit text-xl on hover:bg-slate-400 on hover:text-slate-800'>
        Update Topic
    </button>
    </form>
    
  )
}


export default EditTopicForm