import React from 'react'
import HomePage from '../../Component/HomePage/homePage'
import SideNavbar from '../../Component/SideNavbar/sideNavbar'
import './home.css'
const Home = ({sideNavbar}) => {
  return (
    <div className='home'>
        <SideNavbar sideNavbar={sideNavbar}/>
        <HomePage sideNavbar={sideNavbar}/>

    </div>
  )
}

export default Home