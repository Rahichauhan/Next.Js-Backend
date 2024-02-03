import { request } from "http";
import ConnectMongodb from "../../../../../libs/mongodb";
import Topic from "../../../../../models/topic";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    const {id}=params;
    const{newTitle:title,newDesc:description}=await request.json();
    await ConnectMongodb();
    await Topic.findByIdAndUpdate(id,{title,description});
    return NextResponse.json({message:"Topic updated"},{status:200});
}
export async function GET(request,{params}){
    const { id }=params;
    await ConnectMongodb();
    const topic=await Topic.findOne({ _id: id});
    return NextResponse.json({topic});
}