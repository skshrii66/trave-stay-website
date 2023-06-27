import React from 'react'
import  '../../App.css'
import{SiYourtraveldottv} from 'react-icons/si'
import{ImFacebook} from 'react-icons/im'
import{BsTwitter} from 'react-icons/bs'
import{AiFillInstagram} from 'react-icons/ai'
import { Link ,useNavigate } from 'react-router-dom'


const Footer = () => {
  const navigate=useNavigate();
  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">

          <div className="footerLogo">
          <a href="#" className="logo flex">
            <h1 className='flex'><SiYourtraveldottv className="icon"/>
            Theecode</h1>
          </a>
          </div>

          <div className="social flex">
      <ImFacebook className="icons"/>
      < BsTwitter className="icons"/>
      <AiFillInstagram className="icons"/>
        </div>

        </div>

        <div className="footerLinks">
          <span className="linkTitle">
          Information
          </span>
          <li>
            {/* <a href="#">Home</a> */}
            <Link to='/Home' className="navLink">Home</Link>
              <button onClick={()=>navigate('/Home')}></button>
          </li>
          {/* <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li> */}
         

        </div>

        <div className="footerLinks">
          <span className="linkTitle">
          Contact us
          </span>
         <span className='phone'>+91- 96294 49700</span>
         <span className='email'>skshrii66@gmail.com</span>
        </div>

        

      </div>

    </div>
  )
}

export default Footer