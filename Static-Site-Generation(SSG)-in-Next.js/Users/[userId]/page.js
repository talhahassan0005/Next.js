import Link from "next/link";
import getUsers from "../../../../services/getUsers"

export default async function page(props) {
    const UserList = await getUsers();
    const currentid = UserList.props.userId;
    const userdata = currentid - 1;
    console.log(UserList.props.userId);
    return (
        <div>
            <h1 >User Details Page</h1>
            <h3>{userdata.id}</h3>
            <h3>{userdata.username}</h3>
            <h3>{userdata.email}</h3>
            <h3>{userdata.phone}</h3>



        </div>
    )
}

export async function generateStaticParams() {
    const UserList = await getUsers();

    return UserList.map(user => ({
        userId: user.id.toString()
    }))

}
