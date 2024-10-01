import Detailspage from "./Common Components/Detailspage";
import FooterComponent from "./Common Components/FooterPage";
import TouristFeedback from "./Common Components/TouristFeedback";
import userpagelogo from '../Assets/Designer.png'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Aboutpage=()=>{ 
  useEffect(()=>{window.scrollTo(0,0)},[])
  const navigate=useNavigate()
      const goToHome=()=>{
navigate('/userpage')
      }
      const onBook=()=>{
        let email=sessionStorage.getItem('email')
        if(email!==""){
          setTimeout(()=>{
            navigate('/booking')
          },1000)
        }else{
          alert("Please Login")
        }
      }
    return <>
    <div className="header">
           <img src={userpagelogo} alt="logo" className="logo"/>
           <nav className="usernavbar">
          <ul>
          <li onClick={()=>{navigate('/')}}>Home</li>
            <li style={{color:"blue"}}>About</li>
            <li onClick={()=>{navigate('/destination')}}>Destination</li>
            <li  onClick={()=>{navigate('/fav')}}>Favorites</li>
            <li onClick={()=>{navigate('/blog')}}>Blog</li>
            <li onClick={()=>{navigate('/contact')}}>Contact</li>
            <li><button  className="booknow" onClick={onBook}>Book Now</button></li>
            <li><button  className="booknow" onClick={()=>{navigate('/login')}}>Login</button></li>
          </ul>
           </nav>
        </div>
        <div className="aboutpage">
          <h1 style={{marginTop:"70vh",fontSize:"3rem"}}>About Us</h1>
          <div>
          <span style={{fontSize:"1.5rem"}} onClick={goToHome}>Home &gt;</span>
          <span style={{fontSize:"1.5rem"}}>About us &gt;</span>
          </div>
          
        </div>
    <Detailspage></Detailspage>
    <TouristFeedback></TouristFeedback>
      <FooterComponent></FooterComponent>
    </>
}
export default Aboutpage;