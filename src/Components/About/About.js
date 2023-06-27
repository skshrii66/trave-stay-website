import React from 'react'
import  '../../App.css'


//Images===========================>
// import img2 from'../Asserts/img2.pix.jpeg'
// import img3 from'../Asserts/img3.pix.jpeg'
// import img4 from'../Asserts/img4.pix.jpeg'


//Videos===========================>
import video from'../Asserts/video.pix.mp4'

const About = () => {
  return (
    <sestion className='about section'>
      <div className="secContainer">
        <div className="title">
        Why Hikings?
        </div>

        <div className="mainContent container grid">
          <div className="singleItem">
            {/* <img src="" alt="Image Name"/> */}
            <h3>100+ Mountains</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms of 
              daily life reduces stress and impoves health and well-being.
            </p>

          </div>
          <div className="singleItem">
            {/* <img src="" alt="Image Name"/> */}
            <h3>1000+ Hikings</h3>
            
            <p>
              Research shows that a chance to break away from the normal rhythms of 
              daily life reduces stress and impoves health and well-being.
            </p>

          </div>
          <div className="singleItem">
            {/* <img src=""alt="Image Name"/> */}
            <h3>2000+ Customers</h3>
            
            <p>
              Research shows that a chance to break away from the normal rhythms of 
              daily life reduces stress and impoves health and well-being.
            </p>

          </div>
          
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">

            <div className="cardText">
              <h2>Wonderful House experience in 
                there!</h2>
                <p>
                  The Adventure subranking is based on an 
                  equally weighted average of scores from
                  five country.
                </p>
              </div> 

              <div className="cardVideo">
                <video src={video}autoPlay loop muted
                type="video/mp4"></video>

              </div>

          </div>

        </div>

      </div>

    </sestion>
    )
}

export default About