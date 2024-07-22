


async function getUser(id){

    let data = await fetch (`http://localhost:3000/api/users/${id}`);

    data= await data.json();
    return data.result;
}



export default async function page({params}){
    const user = await getUser(params.userId);
    
    console.log(user);
    
    return(
        <div>
            <h1>User Details</h1>
            <br></br>
            <h4>Id:{user.id}</h4>
            <br></br>
            <h4>Rollno:{user.rollno}</h4>
            <br></br>
            <h4>Name:{user.name}</h4>
            <br></br>
            <h4>Age:{user.age}</h4>
           <br></br>
            <h4>Phone#:{user.phno}</h4>
            
        </div>
    )
}
