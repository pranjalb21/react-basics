import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Body from './Body'
import { Outlet } from 'react-router-dom'

function Page() {
  return (
    <div className='w-screen h-screen flex flex-col'>
       <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Page