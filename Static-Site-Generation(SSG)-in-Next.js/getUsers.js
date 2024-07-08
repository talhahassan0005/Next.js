export default async function getUsers(){
const user= await fetch("https://fakestoreapi.com/users");
return user.json();
}