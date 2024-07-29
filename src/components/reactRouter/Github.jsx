import React, { useEffect, useState } from 'react'

export default function Github() {
    const [profile,setProfile]=useState([])
    useEffect(()=>{
        fetch(`https://api.github.com/users/pranjalb21`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProfile(data);
        })
    },[])
  return (
    <div className='flex flex-col justify-center p-3 text-center'>
        <img src={profile.avatar_url} alt={profile.name} className='rounded-full h-40 w-40 self-center' />
        <h1 className='text-2xl font-semibold font-mono p-2'>{profile.name}</h1>
        <h4 className='hover:underline cursor-pointer font-mono tracking-tighter'>{profile.followers} followers</h4>
    </div>
  )
}
