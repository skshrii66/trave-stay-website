import React from 'react'
import  '../../App.css'

import{BsArrowRight} from 'react-icons/bs'

//Import images to use=========================>
import img from'../Asserts/img1.pix.jpeg'
import img2 from'../Asserts/img2.pix.jpeg'
import img3 from'../Asserts/img3.pix.jpeg'
import img4 from'../Asserts/img4.pix.jpeg'

//So guys, here also we are going to use the Map method to display our posts.

const Posts=[
  {
    id: 1,
    postImage: img,
    title: 'Beautiful Morocco, let us travel',
    desc: 'The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea.'
  },
  { 
    id: 2,
    postImage: img2,
    title: 'Romantic moments under Eiffel Tower',
    desc: 'with vast swath of desert in its east and west and the rich Nile River Valley at its heart, is site to one of the worlds earliest and greatest civilizations.'
  },
  {
    id: 3,
    postImage: img3,
    title: 'Let us have an adventure outside Tunisia.',
    desc: 'Tunisia is a small Arab country in North Africa that respresents both the apspirations of freedom and struggles against terrorism that roil the regin.'
  },
  {
    id: 4,
    postImage: img4,
    title: 'Beautiful Country is East Africa',
    desc: 'When kenya clamined its independence from the U.K. in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.'
  },
]

const Blog = () => {
  return (
    <section className='blog container section'>
      <div className="secContainer">

        <div className="secIntro">
          <h2 className='secTitle'>
        Our Best Blog?
          </h2>
          <p>
            An insight to the incredible experice in the world.
          </p>
        </div>

      <div className="mainContainer grid">
        {
          Posts.map(({id, postImage, title, desc})=>{
            return(
              <div className="singlePost grid">
          <div className="imgDiv">
            <img src={postImage} alt={title}/>
          </div>

          <div className="postDetails">
            <h3>
             {title}
            </h3>
            <p>{desc}</p>
          </div>

          <a href="#" className="flex">
            <BsArrowRight className="icon"/>
            Read more

          </a>

        </div>
            )
          })
        }

      </div>
      </div>

    </section>
  )
}

export default Blog