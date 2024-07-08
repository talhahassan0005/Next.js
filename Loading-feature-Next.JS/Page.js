async function UserList(){
    let data = await fetch("https://jsonplaceholder.typicode.com/comments");
    data =await data.json();
    return data;
}

export default async function page() {
let users = await UserList();
    return (
        
        <div >
            <h1>User Name List</h1>
            {
                users.map((items)=>(
                    <h2>User Name: {items.body}</h2>
                ))
            }
        </div>
    )
}


