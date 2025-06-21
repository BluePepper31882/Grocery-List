'use client'
import { useEffect, useState } from 'react';
import MenuButton from "@/components/menuButton";
import MenuInput from "@/components/menuInput";

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  useEffect(() => {
    console.log(password)
    console.log(username)
  }, [password, username])


  async function createUser(data: { username: string; password: string }) {
    if (password === password2) {
      const res = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(`Failed to create user: ${msg}`)
      }

      return res.json();
    } else {
      console.log("passwords dont match")
    }
  }

  async function buttonClick() {
    let test = await createUser({ username, password })
    console.log(test)
  }

  const testConnection = async () => {
    const params = new URLSearchParams({
      u: 'bludda',
      p: 'bluddaHOUSE2025!',  // or use token auth
      v: '1.16.1',
      c: 'MyApp',
      f: 'json',
      query: "kanye"
    });

    const response = await fetch(`http://music.bluddahouse.com/rest/search2?${params}`);
    const data = await response.json();

    console.log(data)
  };

  return (
    <div className="flex flex-col ml-100 mr-100 mt-50">
      <label className="center">Create Users</label>
      <MenuInput content="Username" value={username} onChange={setUsername} />
      <MenuInput content="Password" isPassword={true} value={password} onChange={setPassword} />
      <MenuInput content="Repeat Password" isPassword={true} value={password2} onChange={setPassword2} />
      <MenuButton content="Submit User" icon="/pencil.svg" onClick={buttonClick} />
      <MenuButton content="Test Connection" icon="/pencil.svg" onClick={testConnection} />
    </div>
  );
}