import Link from "next/link";



async function getUser(){

    let data = await fetch ("http://localhost:3000/api/users");3

    data= await data.json();
    return data;
}

export default async function page(){
    const users= await getUser();
  
    return(
        <div>
            <h1>Users List</h1>
           { users.map((items)=>(
                
                <Link href={`users/${items.id}`}>{items.name} <br></br></Link>

               
            ))}
        </div>
    )

} 
