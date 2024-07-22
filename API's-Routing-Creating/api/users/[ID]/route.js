import { user } from "@/app/utility/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
   
    
``
    // Filter user data based on userId
    const data = user.filter((item) => item.id == content.params.Id); // Use == for type coercion


    // Log filtered data for debugging


    // Prepare response based on filtered data
    const response = data.length === 0
        ? { result: "No user found for the given userId", success: false }
        : { result: data[0], success: true };

    // Return JSON response with appropriate status code
    return NextResponse.json(response, { status: 200 });
}
