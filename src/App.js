import React from 'react'
import'./App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Popular from './Components/Popular/Popular'
import Offers from './Components/Offers/Offers'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
import Signup from './Components/Signup/Signup'
import Register from './Components/Register/Register'
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import AdminApp from './Admin/AdminApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <>
    {/* <Navbar/>
    <Home/>
    <Popular/>
    <Offer/>
    <About />
    <Blog/>
    <Footer/>
    <Signup/> 
    <Sidebar/>
    <Register/>*/}

    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='/Home' element={<Home/>}/>
    <Route path='/Popular' element={<Popular/>}/>
    <Route path='/Offers' element={<Offers/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Blog' element={<Blog/>}/>
    <Route path='/Footer' element={<Footer/>}/>
    <Route path='/Signup' element={<Signup/>} />
    <Route path='/Register' element={<Register/>} />
    <Route path='/AdminApp' element={<AdminApp/>} />
    </Routes>
      </BrowserRouter>
  
    </div>
    </>

  )
}

export default App