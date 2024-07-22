"use client"
// pages/index.js
import { useState } from 'react';
import styles from './../page.module.css'; // Import CSS module for styling







export default function Adduser() {
    const [name, setName] = useState('');
    const [rollno, setRollno] = useState('');
    const [age, setAge] = useState('');
    const [phno, setPhone] = useState('');


    const adduser=async()=> {
        let data = await fetch("http://localhost:3000/api/users",{ 
            method:"POST",
            body:JSON.stringify({name:name,age:age,rollno:rollno,phno:phno})
        
        });
        data = await data.json();
        if(data.success){
            alert("New user created")

        }
        else{
            alert("New user not created , please try again")
        }
        console.log(data);
       
    }

    
        
        
        return (
        <div className={styles.container}>
            <h1>Add New User</h1>
            <input className={styles.input} type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
            <input className={styles.input} type="text" value={rollno} placeholder="Enter Rollno" onChange={(e)=>setRollno(e.target.value)}/>
            <input className={styles.input} type="text" value={age} placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
            <input className={styles.input} type="text" value={phno} placeholder="0312345867" onChange={(e)=>setPhone(e.target.value)}/>
            <button className={styles.button} onClick={adduser}>Add User</button>
        </div>
    );
}
