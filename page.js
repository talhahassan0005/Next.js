"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";




export default function Home() {

  const router = useRouter();
  return (

    <main>
      <h1>Welcome to my Home Page</h1>
      <Link href="/login">Go to login Page</Link>
      <br />
      <button onClick={() => router.push("/login")}>Login-Page</button>
      <br />
      <br />
      <br />
      <br />
      <Link href="/about">Go to About Page</Link>
      <br />
      <button onClick={() => router.push("/about")}>About-Page</button>
      <br />
      <br />
      <br />
      <button onClick={() => router.push("/studentlist")}>Student-List</button>

    </main>
  );
}
