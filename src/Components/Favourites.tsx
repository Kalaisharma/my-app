import { useNavigate } from "react-router-dom"
import userpagelogo from '../Assets/Designer.png'
import {Card} from 'react-bootstrap';
import { useState,useEffect, useContext } from "react";
import { removeFavourites, userFavourites } from "../Service/TourService";
import { MyContext } from "../App";
import { MyContextType } from "../Interfaces/Interface";

const Favourites=()=>{
    const[favdata,setfavdata]=useState([])
    const[checktrue,settrue]=useState(false)
    useEffect(()=>{
        getData()
    },[])
  const context = useContext(MyContext)
   if (!context) { //because your context may also be undefined
    throw new Error('MyComponent must be used within a MyProvider');
  }
  const { email } = context;
    const getData=async()=>{
   try{ const response=await userFavourites(email);
    if(response?.status===200){
        setfavdata(response?.data)
    }}
    catch(error:any){
      console.log(error,"component");
      if(error?.response.data==='no data'){
settrue(true)
      }
  }
    }
  const removeData = async (el:any) => {
      console.log(email,"ugifgkykjtyghjghjfjfyufyu");
      
      const data={
        placeid:el.placeid,
        email:email
      }
      const response = await removeFavourites(data)
      if (response?.status === 200) {
        getData()
      }
    }
const navigate=useNavigate();
const dataBinding=()=>{
    return favdata?.map((el:any)=>{
        return <>
         <Card className="card destcard" key={el.placeid}>
            <Card.Img variant="top" src={el.img} className='cardimg'/>
            <Card.Body className='cardbody'>
              <Card.Title className='cardtitle'>{el.name}</Card.Title>
              <Card.Title className='heart' >❤️</Card.Title>
              <Card.Text  className='cardtext'>{el.description}</Card.Text>
              <Card.Footer className='click'><button className='clickbutton removebutton' onClick={()=>removeData(el)}>Remove 💔</button></Card.Footer>
            </Card.Body>
          </Card>
        </>
    })
}
const onBook=()=>{
  if(email!==""){
    setTimeout(()=>{
      navigate('/booking')
    },1000)
  }else{
    alert("Please Login")
  }
}
return<>
<div className="destinationcontainer">
<div className="header">
           <img src={userpagelogo} alt="logo" className="logo"/>
           <nav className="usernavbar">
          <ul>
          <li onClick={()=>{navigate('/')}}>Home</li>
            <li onClick={()=>{navigate('/about')}}>About</li>
            <li onClick={()=>{navigate('/destination')}}>Destination</li>
            <li style={{color:"blue"}}>Favorites</li>
            <li onClick={()=>{navigate('/blog')}}>Blog</li>
            <li onClick={()=>{navigate('/contact')}}>Contact</li>
            <li><button  className="booknow" onClick={onBook}>Book Now</button></li>
            <li><button  className="booknow" onClick={()=>{navigate('/login')}}>Login</button></li>
          </ul>
           </nav>
        </div>
<div>

</div>
{checktrue && <div className="nofav">
  <h1>You don't have Favourites</h1>
</div>}


{!checktrue &&  
<div>
<h1 style={{margin:"7% 0% 3%",textAlign:"center",color:"white"}}>Your Favourite Destinations</h1>

<div className="destinationgrid">
{dataBinding()}
</div>
</div>
}
</div>
</>

}
export default Favourites;