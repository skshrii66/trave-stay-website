import React from 'react'
import  '../../App.css'
import Navbar from '../Navbar/Navbar'
import { Link ,useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();
  return (
   
   <div className='home'>
    <Navbar/>
     <section className='home_content'>
      
      <div className="secContainer container">

        <div className="homeText">

          <h1 className="title">
        Plan Your Trip With Travel Theecode...&#128525;
          </h1>

          <p className="subTitle">
        Travel to your favourite city with respectful of the environment!
          </p>

          {/* <button className='btn'>
        <a href="#">Explore Now</a>
          </button> */}

        </div>

        <div className="homeCard grid">

          <div className="locationDiv">
            <label htmlFor="location">From Location</label>
            <input type="text" placeholder='Dream Distination'/>
          </div>

          <div className="priceDiv">
            <label htmlFor="location">Price Range</label>
            <input type="text" placeholder='Rs: 1,400 - Rs: 50,000'/>
          </div>

          <div className="distDiv">
            <label htmlFor="location">To Location</label>
            <input type="text" placeholder='Happy Journey'/>
          </div>
          
         
          <button className='btn'>
        <Link to='/Offers' className="navLink">Search</Link>
      <button onClick={()=>navigate('/Offers')}></button>
          </button>

        </div>


      </div>

    </section>
   </div>
  )
}

export default Home