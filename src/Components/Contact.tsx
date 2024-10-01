import { useNavigate } from "react-router-dom"
import userpagelogo from '../Assets/Designer.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useContext, useRef, useState } from "react";
import FooterComponent from "./Common Components/FooterPage";
import { MyContext } from "../App";

const Contact=()=>{
    const position: [number, number] = [12.950771, 77.584236];
    let nameregex=/^[A-Za-z]+(?: [A-Za-z]+)*$/
let emailregex=/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/
    const navigate=useNavigate()
    const[values,setvalues]=useState({name:"",email:"",subject:"",message:""})
    const[booleanvalues,setbooleanvalues]=useState({namereq:false,emailreq:false,subjectreq:false,
        messagereq:false,nameregex:false,subjectregex:false,emailregex:false
    })
    const nameref=useRef<HTMLInputElement>(null)
    const emailref=useRef<HTMLInputElement>(null)
    const messageref=useRef<HTMLTextAreaElement>(null)
    const subref=useRef<HTMLInputElement>(null)
    const sendmessage=()=>{
        setvalues({name:nameref.current?nameref.current.value:'',email:emailref.current?emailref.current.value:'',
            subject: subref.current ? subref.current.value : '', message: messageref.current ? messageref.current
            .value : ''
        })
        if(nameref.current?.value===""){
            setbooleanvalues((prevstate)=>({...prevstate,namereq:true}))
        }else{
let bool=nameregex.test(nameref.current?nameref.current.value:'')
if(!bool){
    setbooleanvalues((prevstate)=>({...prevstate,nameregex:true,namereq:false}))
}else{
    setbooleanvalues((prevstate)=>({...prevstate,nameregex:false,namereq:false}))

}
        }
        if(emailref.current?.value===""){
            setbooleanvalues((prevstate)=>({...prevstate,emailreq:true}))
        }else{
            let bool=emailregex.test(emailref.current?emailref.current.value:'')
if(!bool){
    setbooleanvalues((prevstate)=>({...prevstate,emailregex:true,emailreq:false}))
}else{
    setbooleanvalues((prevstate)=>({...prevstate,emailregex:false,emailreq:false}))

}
        }
        if(subref.current?.value===""){
            setbooleanvalues((prevstate)=>({...prevstate,subjectreq:true}))
        }else{
            let bool=nameregex.test(subref.current?subref.current.value:'')
if(!bool){
    setbooleanvalues((prevstate)=>({...prevstate,subjectregex:true,subjectreq:false}))
}else{
    setbooleanvalues((prevstate)=>({...prevstate,subjectregex:false,subjectreq:false}))

}
        }
        if(messageref.current?.value===""){
            setbooleanvalues((prevstate)=>({...prevstate,messagereq:true}))
        }else{
            setbooleanvalues((prevstate)=>({...prevstate,messagereq:false}))

        }
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{
        const {name}=e.currentTarget
        setvalues({...values,[name]:e.currentTarget.value})
        if(name==="name"){    setbooleanvalues((prevstate)=>({...prevstate,nameregex:false,namereq:false}))}
        if(name==="email"){    setbooleanvalues((prevstate)=>({...prevstate,emailregex:false,emailreq:false}))}
        if(name==="subject"){    setbooleanvalues((prevstate)=>({...prevstate,subjectregex:false,subjectreq:false}))}
        if(name==="message"){    setbooleanvalues((prevstate)=>({...prevstate,messagereq:false}))}

    }
    const context = useContext(MyContext)
    if (!context) { //because your context may also be undefined
    throw new Error('MyComponent must be used within a MyProvider');
  }
 const{email} = context;
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
    <div className="header">
           <img src={userpagelogo} alt="logo" className="logo"/>
           <nav className="usernavbar">
          <ul>
          <li onClick={()=>{navigate('/')}}>Home</li>
            <li onClick={()=>{navigate('/about')}}>About</li>
            <li onClick={()=>{navigate('/destination')}}>Destination</li>
            <li onClick={()=>{navigate('/fav')}}>Favorites</li>
            <li onClick={()=>{navigate('/blog')}}>Blog</li>
            <li style={{color:"blue"}}>Contact</li>
            <li><button  className="booknow" onClick={onBook}>Book Now</button></li>
            <li><button  className="booknow" onClick={()=>{navigate('/login')}}>Login</button></li>
          </ul>
           </nav>
        </div>
        <div className="aboutpage blogpage">
          <h1 style={{marginTop:"70vh",fontSize:"3rem"}}>Contact Us</h1>
          <div>
          <span style={{fontSize:"1.5rem"}} onClick={()=>{navigate('/userpage')}}>Home &gt;</span>
          <span style={{fontSize:"1.5rem"}}>Contact Us &gt;</span>
          </div>
        </div>
        <div className="contactcontainer">
            <div className="detailspanel">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/4821/4821951.png" alt="" />
                    <h4>Address</h4>
                    <span>198,Rose Garden Street,Bangalore</span>
                </div>
                <div>
                <img src="https://cdn-icons-png.flaticon.com/128/3192/3192750.png" alt="" />
                <h4>Contat</h4>
                <span>+91 8923946702</span>
                </div>
                <div>
                <img src="https://cdn-icons-png.flaticon.com/128/3062/3062634.png" alt="" />
                <h4>Email Address</h4>
                <span>info@travelbuddy.com</span>
                </div>
                <div>
                <img src="https://cdn-icons-png.flaticon.com/128/3178/3178370.png" alt="" />
                <h4>Website</h4>
                <span>www.travelbuddy.com</span>
                </div>
            </div>
            <div className="messageandmap">
                <div className="mapsection">
                <MapContainer center={position} zoom={10} style={{ height: '100%', width: '100%' }} attributionControl={true}
>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
                </div>
                <div className="messagesection">
                    <input type="text" name="name" id="" placeholder="Your Name" ref={nameref} value={values.name}
                    onChange={handleChange}/>
                    {booleanvalues.namereq && <span>Name is required</span>}
                    {booleanvalues.nameregex && <span>Name is Invalid</span>}
                    <input type="text" name="email" id="" placeholder="Your Email" ref={emailref}
                    onChange={handleChange}/>
                    {booleanvalues.emailreq && <span>Email is required</span>}
                    {booleanvalues.emailregex && <span>Email is Invalid</span>}
                    <input type="text" name="subject" id="" placeholder="Subject" ref={subref}
                    onChange={handleChange}/>
                    {booleanvalues.subjectreq && <span>Subject is required</span>}
                    {booleanvalues.subjectregex && <span>Subject is Invalid</span>}
                    <textarea rows={7} style={{resize:"none"}} placeholder="Message" ref={messageref} name="message"
                    onChange={handleChange}></textarea>
                    {booleanvalues.messagereq && <span>Message is required</span>}
                    <button className="sendmessage" onClick={sendmessage}>Send Message</button>
                </div>
            </div>

        </div>
        <FooterComponent></FooterComponent>
    </>
}
export default Contact;