"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Layout({ children }) {
    const pathname = usePathname();

    return (

        <div>
            {
                pathname != "/login/teacherlogin" ?
                    <ul className="login-menu">
                        <li>
                            <Link href="/login">Main Login Page</Link>
                        </li>
                        <li>
                            <Link href="/login/studentlogin">Student Login Page</Link>
                        </li>
                        <li>
                            <Link href="/login/teacherlogin">Teacher Login Page</Link>
                        </li>
                    </ul>
                    : <Link href={"/login"}>Go to Main Login page </Link>
            }
            {children}

        </div>
    );

}
