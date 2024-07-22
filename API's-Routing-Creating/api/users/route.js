import { user } from "@/app/utility/db";

import { NextResponse } from "next/server";

export  function GET() {
    const data=user;   
 
    return  NextResponse.json(data,{status:200})        
  }

  export async  function POST(request){

    let payload =await request.json();
    console.log(payload.name);
    if(!payload.name || !payload.age || !payload.rollno || !payload.phno){
       return NextResponse.json({result:"required filed not found",success:false},{status:400})
    }
    return NextResponse.json({result:"new user created",success:true},{status:201})
  }
