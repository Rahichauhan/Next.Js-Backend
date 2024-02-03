import EditTopicForm from '@/app/components/EditTopicForm'
import React from 'react'
//yaha dynamic route hai iyseliye id params se milege
const getTopicBtId=async(id)=>{
try {
  const res=await fetch(`http://localhost:3000/api/topics/${id}`,{cache:"no-store"})
  if(!res.ok)
  {
    throw new error("failed to fetch the topic");
  }
  return res.json();
} catch (error) {
  
}
}
const page = async({params}) => {
  const {id}=params;
 const {topic}= await getTopicBtId(id);
 const{title,description}=topic;
  

  return (
    <div>
       <EditTopicForm id={id} title={title} description={description}/>
    </div>
  )
}

export default page