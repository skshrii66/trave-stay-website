import React from 'react'
import  '../../App.css'
import{MdKingBed} from 'react-icons/md'
import{MdBathtub} from 'react-icons/md'
import{FaWifi} from 'react-icons/fa'
import{MdAirportShuttle} from 'react-icons/md'
import{MdLocationOn} from 'react-icons/md'
import{BsArrowRightShort} from 'react-icons/bs'
import { Link ,useNavigate } from 'react-router-dom'

// Let us import images ==========>
// import img from'../Asserts/imggg.pix.jpeg'
import img2 from'../Asserts/img2.pix.jpeg'
import img3 from'../Asserts/img3.pix.jpeg'
import img4 from'../Asserts/img4.pix.jpeg'
import img5 from'../Asserts/img5.pix.jpeg'


// So since we have finished styling every content,
//  let us also use the same high order array methods (MAP)

const offers =[
  {
    id:1,
    imgSrc: img2,
    stTdeitle: 'Machu-pichu' ,
    location: 'Peru',
    price: 'Rs: 5,000'
  },

  {
    id:2,
    imgSrc: img3,
    stTdeitle: 'Guanajuatro' ,
    location: 'Mexico',
    price: 'Rs: 6,600'
  },

  {
    id:3,
    imgSrc: img4,
    stTdeitle: 'Angor wet' ,
    location: 'Cambodia',
    price: 'Rs: 5,500',
  },

  {
    id:4,
    imgSrc: img5,
    stTdeitle: 'Taj mahal' ,
    location: 'India',
    price:'Rs:4,400',
  },
]


const Offer = () => {
const navigate=useNavigate();
  return (
    <section className='offer container section'>

    <div className="secContainer">
      <div className="secIntro">
        <h2 className="secTitle">
        Special Offers
        </h2>
        <p>
          From historical cities to natural specteculars, 
          come see the best of the worke!
        </p>
      </div>

      <div className="mainContent grid">

       {
        offers.map(({ id,imgSrc,stTdeitle,location,price})=>{
          return(
            <div className="singleOffer">
            <div className="destImage">
              <img src={imgSrc} alt={stTdeitle}/>
  
              <span className="discount"> 
              30% off
              </span>
            </div>
  
            <div className="offerBody">
              <div className="price flex">
                <h4>
                 {price}
                  </h4> 
                  <span className="status"> 
                  For return
                  </span>
              </div>
  
              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <MdKingBed className="icon"/>
                  <small>2 Beds</small>
                </div>



                <div className="singleAmenity flex">
                  <MdBathtub className="icon"/>
                  <small>1 Bath</small>
                </div>

                <div className="singleAmenity flex">
                  <FaWifi className="icon"/>
                  <small>Wi-Fi</small>
                </div>
                <div className="singleAmenity flex">
                  <MdAirportShuttle className="icon"/>
                  <small>Shuttle</small>
                </div>
              </div>
  
              <div className="location flex">
                <MdLocationOn className="icon"/>
                <small>91+ vine #96, 
                  {location} </small>
              </div>
  
              <button className='btn flex'>
               {/* View Details */}
               {/* <BsArrowRightShort className="icon"/> */}
               <Link to='/Popular' className="navLink">View Details</Link>
              <button onClick={()=>navigate('/Popular')}></button>
              </button>
            </div>
          </div>
          )
        })
       }

      </div>
   </div>  
    </section>
  )
}

export default Offer