import React, { useState } from 'react'
import  '../../App.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { Link ,useNavigate } from 'react-router-dom'
// import { Link} from 'react-router-dom' 

const Navbar = () => { 
  // Code to toggle/show navBar
  const[active, setActive]= useState('navBar')

  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

    // Code to remove Navbar
    const removeNav =()=>{
      setActive('navBar activeNavBar')
    }

    //code to add background color to the header....
    const[transparent, setTransparent]= useState('header activeHeader')
    const addBg =()=>{
      if(window.scrollY >= 10){
      setTransparent('header')
    }
    else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)


const navigate=useNavigate();
  return (
    <section className='navBarsection'> 
<div className={transparent} >

  <div className='d-flex justify-space-between align-items-center'>
  <div className="logoDiv">
    <a href="#" className="logo">
      <h1><SiYourtraveldottv className="icon"/>
      Theecode
      </h1>
    </a>
  </div>

  <div className={active}> 
  <ul className="navLists flex">

   <li className="navItem"> 
   {/* <a href="#" className="navLink">About</a> */}
    <Link to='/About' className="navLink">About</Link>
      <button onClick={()=>navigate('/About')}></button>
   </li>

   {/* <li className="navItem">   */}
   {/* <a href="#" className="navLink">Offers</a> */}
    {/* <Link to='/Offers' className="navLink">Offers</Link> */}
      {/* <button onClick={()=>navigate('/Offers')}></button> */}
    {/* </li> */}

   {/* <li className="navItem">  */}
   {/* <a href="#" className="navLink">Footer</a> */}
    {/* <Link to='/popular' className="navLink">popular</Link> */}
      {/* <button onClick={()=>navigate('/popular')}></button> */}
   {/* </li> */}

   <li className="navItem"> 
   {/* <a href="#" className="navLink">Blog</a> */}
   <Link to='/Blog' className="navLink">Blog</Link>
      <button onClick={()=>navigate('/Blog')}></button>
   </li>

   <li className="navItem"> 
   {/* <a href="#" className="navLink">Contact</a> */}
   <Link to='/Footer' className="navLink">Contact</Link>
      <button onClick={()=>navigate('/Footer')}></button>
   </li>

   <div className="headerBtns flex"> 
    <button className='btn loginBtn'>
      {/* <a href="#">Login</a> */}
      <Link to='/Signup'>Login</Link>
      <button onClick={()=>navigate('/Signup')}></button>
    </button> 


     <button className='btn'>
      {/* <a href="Signup">Sign up</a> */}
      <Link to='/Register'>Sign up</Link>
      <button onClick={()=>navigate('/Register')}></button>
    </button>
   </div>
  </ul>

  <div onClick={removeNav } className="closeNavbar">
    <AiFillCloseCircle className="icon"/>
  </div>

  </div>
    </div>


  <div onClick={showNav} className="toggleNavbar">
    <TbGridDots className="icon"/>
  </div>
 </div>
</section>
  )
}

export default Navbar