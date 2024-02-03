import React from 'react'
import RemoveBtn from './RemoveBtn'
import { HiPencilAlt } from "react-icons/hi";
import Link from 'next/link';

const getTopics=async()=>{
try {
  const res=await fetch('http://localhost:3000/api/topics',{
    cache:"no-store"
  });
  if(!res.ok)
  {
    throw new Error("Failed to fetch the topics");
  }
  return res.json();

  //by default the fetch method in next application cache the data when you make changes in the database and then try to fetch it does,t gives the updated changes so we add cache here
} catch (error) {
  console.log(error);
}
}

const TopicsList =async () => {
  const {topics}=await getTopics()
  return (
    <>
   {topics.map((t)=>(
    <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div>
            <h2 className='font-bold text-2xl'>{t.title}</h2>
            <div>{t.description}</div>
        </div>
        <div className='flex gap-2'>
            <RemoveBtn id={t._id}/>
            <Link href={`/editTopic/${t._id}`}><HiPencilAlt size={24}/></Link>
           
        </div>
    </div>
     ))}
    </>
  )
}

export default TopicsList