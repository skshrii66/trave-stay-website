import React, {useState} from 'react'
import  '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate} from 'react-router-dom' 

function Signup() {

  
  const [email, setemail]= useState('')
  const [password, setpassword]= useState('')
  const [data1,setData1] =useState([])

  let dash= false; 
  const navigate=useNavigate();

  let url="https://64957f7ab08e17c917922f18.mockapi.io/register"
  function getdata(){
    fetch(url,{
      method:"GET",
      headers:{"content-type": "application/json"},
    }).then((result)=> result.json())
    .then((data)=> {
      console.log(data);
      setData1(data)
    
    }).catch((error)=> {
      console.log(error)
    })
  }
  getdata();

  const signIn =()=>{
    for (let i = 0; i < data1.length; i++) {
      console.log(data1[i])
      if(email== data1[i].email &&
        password== data1[i]. password){
          dash=true;
        }
    }

    if(dash){
      console.log('success');
      sessionStorage.setItem("email",email)
      navigate('/home')
    }else{
      alert("Invalid Credentials")
      console.log('failed');
    }
  }
  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
   <div className='Signup '>
    <form className='needs-validation'>
    <h2 className='mb-3'>Login form</h2>
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
    <button type='submit' className='btn btn-success w-100 mt-2' onClick={()=>signIn()}>
      Login in
    {/* <Link to='/Home'></Link>  */}
      {/* <button ></button> */}
    </button>

    </form>
   </div>
   </div>
  )
}

export default Signup