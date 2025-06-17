'use client'
import { useEffect, useState } from 'react';
import MenuButton from "@/components/menuButton";
import MenuInput from "@/components/menuInput";
import { hashPassword } from '@/lib/passHash';

export default function Home() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  useEffect(() => {
    console.log(password)
  }, [password])


  async function createUser() {
    if (password === password2) {
      let hasedPass = await hashPassword(password)
      console.log(hasedPass)
    }else{
      console.log("passwords dont match")
    }
    //this is not right, do what is said below
  }

  return (
    <div className="flex flex-col ml-100 mr-100 mt-50">
      <label className="center">Create Users</label>
      <MenuInput content="Username" value={user} onChange={setUser} />
      <MenuInput content="Password" isPassword={true} value={password} onChange={setPassword} />
      <MenuInput content="Repeat Password" isPassword={true} value={password2} onChange={setPassword2} />
      <MenuButton content="Submit User" icon="/pencil.svg" onClick={createUser} />
    </div>
  );
}

/**
 * Add route for creating user
 */