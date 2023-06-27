import React from 'react'
import  '../../App.css'

import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import{BsDot} from 'react-icons/bs'

//Import the images==========>
// import img from'../Asserts/img1.pix.jpeg'
import img2 from'../Asserts/img2.pix.jpeg'
import img3 from'../Asserts/img3.pix.jpeg'
import img4 from'../Asserts/img4.pix.jpeg'
import img5 from'../Asserts/img5.pix.jpeg'

// // so now we are going to use a high order array method to display all the destination using Map.
// To do so we need to list all the destination in one array "Data" 
//and later we shall call each destination by index/IdleDeadline.

const Data =[
  {
    // id:1,
    imgSrc: img2,
    destTitle: 'Machu-pichu' ,
    location: 'Peru',
    grade: 'Cultural relax',
  },

  {
    // id:2,
    imgSrc: img3,
    destTitle: 'Guanajuatro' ,
    location: 'Mexico',
    grade: 'Cultural relax'
  },

  {
    // id:3,
    imgSrc: img4,
    destTitle: 'Angor wet' ,
    location: 'Cambodia',
    grade: 'Cultural relax'
  },

  {
    // id:4,
    imgSrc: img5,
    destTitle: 'Taj mahal' ,
    location: 'India',
    grade: 'Cultural relax'
  },
]


const Popular
 = () => {
  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
          Popular Destination
            </h2>
            <p>
              From historical cities to natural specteculars,come see the best of the world!
            </p>
            </div> 

            <div className="iconsDiv flex">
          {/* <BsArrowLeftShort className="icon leftIcon"/> */}
          {/* <BsArrowRightShort className="icon"/> */}
            </div>

        </div>

        <div className="mainContent grid">
          {
            Data.map(({id, imgSrc, destTitle, location, grade})=>{
              return(
                <div className="singleDestination">
            <div className="destImage">

              <img src={imgSrc} alt="Image title"/>

              <div className="overlayInfo">
                <h3>{destTitle}</h3>
                <p>
                 {location}
                </p>

                {/* <BsArrowRightShort className='icon'/> */}

              </div>

            </div>

            <div className="destFooter">
              <div className="number">
                  {/* 0{id} */}
              </div>
              
            <div className="destText flex">
              <h6>
                {location}
              </h6>
              <span className='flex'>
                <span className="theecode">
              <BsDot className="icon"/>
                </span>
              Dot
              </span>
 
            </div>
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

export default Popular
