import  React, {useState} from 'react'
import  '../../App.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate} from 'react-router-dom' 


 function Register() {
  const navigate=useNavigate();
  const [username, setusername] = useState('')
  const [email, setemail]= useState('')
  const [password, setpassword]= useState('')

 


  const signup = (e) =>{
    e.preventDefault()
    if(!username || !email || !password ){
      alert("Fill the all the details");
      return;
    }
   console.log(username);
   console.log(email)
   console.log(password)
   axios.post("https://64957f7ab08e17c917922f18.mockapi.io/register",{
    username,
    email,
    password,
   })
   .then((response) =>{
    navigate('/signup')
    console.log(response);
   })
   .catch((error) =>{
    console.log(error);
   });
  }; 



  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
   <div className='Register '>
    
    <form className='needs-validation' onSubmit={(e)=>{signup(e)}}>
    <h2 className='mb-3'>Register form</h2>

    <div className='form-group was-validated mb-2'>
        <label htmlFor='name' className='form-label' placeholder='Pleace Enter your Username'>Username</label>
        <input type="name" className='form-control' placeholder='Pleace Enter your Username' 
        onChange={(e)=>{setusername(e.target.value)}} value={username} required></input>
        
        <div className="invalid-feedback">
        
        </div>
    </div>

    <div className='form-group was-validated mb-2'>
        <label htmlFor='email' className='form-label' placeholder='Please Enter your Email'>Email Address</label>
        <input type="email" className='form-control'placeholder='Please Enter your Email' 
        onChange={(e)=>{setemail(e.target.value)}} value={email} required></input>
        <div className="invalid-feedback">
        
        </div>
    </div>
    <div className='form-group was-validated mb-2'>
        <label htmlFor='password' className='form-label' placeholder='Pleace Enter your Password'>Password</label>
        <input type="password" className='form-control' placeholder='Pleace Enter your Password'
        onChange={(e)=>{setpassword(e.target.value)}} value={password} required></input>
        <div className="invalid-feedback">
        
        </div>
    </div>
    <div className='form-group mb-2'>
       <input type="checkbox" className='form-check-input'></input>
        <label htmlFor='checkbox' className='form-check-label'>Remember me</label>
    </div>
    <button type='submit' className='btn btn-success w-100 mt-2' onClick={(e)=>signup(e)}>
        Register
    {/* <Link to='/signup'>Register</Link>  */}
      {/* <button ></button> */}

    </button>

    </form>
   </div>
   </div>
  )

}
export default Register