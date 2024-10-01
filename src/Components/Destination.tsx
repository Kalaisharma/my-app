import { ReactElement, useContext, useEffect, useState } from "react";
import { getDestination, getFavourites } from "../Service/TourService";
import {Card,Alert} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import userpagelogo from '../Assets/Designer.png'
import HeartIcon from "./HeartIcon";
import { MyContext, VisibleContext } from "../App";
import { favdata } from "../Interfaces/Interface";

const Destination=()=>{
const[destinationdata,setdestinationdata]=useState([])
useEffect(()=>{
    getData()
},[])
const getData=async()=>{
const response=await getDestination();
if(response?.status===200){
    setdestinationdata(response?.data)
}
}
  const context = useContext(VisibleContext)
  if (!context) { //because your context may also be undefined
    throw new Error('MyComponent must be used within a MyProvider');
  }
  const { visible,setvisible } = context;
  const [message, setmessage] = useState('')
  const emailcontext = useContext(MyContext)
    if (!emailcontext) { //because your context may also be undefined
    throw new Error('MyComponent must be used within a MyProvider');
  }
const{email}=emailcontext
  const handleClick = async (el: any) => {
    const val: string | null = sessionStorage.getItem('visible')
      const data:favdata= {
    placeid:el.placeid,
    img:el.img,
    name:el.name,
desc:el.description,
email:email,
        visible: JSON.parse(val ? val:'')
  }
if(email===""){
  alert("Please Login to add Favourites");
}else{
const response=await getFavourites(data);
if(response?.status===200){
  console.log(response);
  if(response?.data==='Inserted'){
    setmessage('Added to Favourites ❤️')
    setvisible(true);
  setTimeout(()=>{
    setvisible(false)
  },1000)
  }
  if(response?.data==='Deleted'){
    setmessage('Removed from Favourites 💔')
    setvisible(true);
  setTimeout(()=>{
    setvisible(false)
  },1000)
  }
  if(response?.data==='already there'){
    setmessage('Already in Favourites ❣️')
    setvisible(true);
  setTimeout(()=>{
    setvisible(false)
  },1000)
  }
}
}
}
const dataBinding=()=>{
    return destinationdata.map((el:any)=>{
        return <>
         <Card className="card destcard" key={el.placeid}>
            <Card.Img variant="top" src={el.img} className='cardimg'/>
            <Card.Body className='cardbody'>
              <Card.Title className='cardtitle'>{el.name}</Card.Title>
              <Card.Title className='heart' onClick={()=>handleClick(el)}><HeartIcon/></Card.Title>
              <Card.Text  className='cardtext'>{el.description}</Card.Text>
              <Card.Footer className='click'><button className='clickbutton'>Made with ❤️</button></Card.Footer>
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
const navigate=useNavigate()
return <>
<div className="destinationcontainer">
<div className="header">
           <img src={userpagelogo} alt="logo" className="logo"/>
           <nav className="usernavbar">
          <ul>
          <li onClick={()=>{navigate('/')}}>Home</li>
            <li onClick={()=>{navigate('/about')}}>About</li>
            <li style={{color:"blue"}}>Destination</li>
            <li onClick={()=>{navigate('/fav')}}>Favorites</li>
            <li onClick={()=>{navigate('/blog')}}>Blog</li>
            <li onClick={()=>{navigate('/contact')}}>Contact</li>
            <li><button  className="booknow" onClick={onBook}>Book Now</button></li>
            <li><button  className="booknow" onClick={()=>{navigate('/login')}}>Login</button></li>
          </ul>
           </nav>
        </div>
       {visible && 
 <Alert  variant={'primary'} style={{width:"20%",textAlign:"center",position:"sticky",top:"100px",bottom:"10px",zIndex:"1",left:"40%",float:"left"}}>
{message}
</Alert>      
}
<div>
    <h1 style={{margin:"7% 0% 3%",textAlign:"center",color:"white"}}>Our Destinations</h1>
</div>
<div className="destinationgrid">
    {dataBinding()}
</div>
</div>
</>
}
export default Destination;
