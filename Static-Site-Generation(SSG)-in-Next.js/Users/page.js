import Link from "next/link";
import getUsers from "../../../services/getUsers"
export default async function page() {
    const UserList = await getUsers();
    console.log(UserList);
    return (
        <div>
            <h1 >User_List Page</h1>
            {
                UserList.map((user) => (
                    <h2 ley={user.id}>
                        <Link href={'/users/${user.id}'}>{user.username}</Link>
                    </h2>
                ))
            }


        </div>
    )
}