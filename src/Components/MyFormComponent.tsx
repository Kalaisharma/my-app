import {  useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../Service/Formservice";
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
function Myform(){
   const navigate= useNavigate();
   const first_name=useRef<HTMLInputElement>(null)
   const last_name=useRef<HTMLInputElement>(null)
   const email=useRef<HTMLInputElement>(null)
   const password=useRef<HTMLInputElement>(null)
   const confirm_password=useRef<HTMLInputElement>(null)
   const dob=useRef<HTMLInputElement>(null)
   const address=useRef<HTMLInputElement>(null)
   const contact=useRef<HTMLInputElement>(null)
  //  const {state}=useLocation();
  //  const mydata=state?state:{}
let nameregex=/^[A-Za-z]+(?: [A-Za-z]+)*$/
let contactregex=/^[6-9]\d{9}$/
let emailregex=/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/
// useEffect(()=>{
//   // membershipData()
//  
// mydata.bool=false
// },[])


  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email:'',
    password:'',
    confirmpassword:'',
    dob: '',
    gender: '',
    contact: '',
   address:''
  });
  const validationmessage={
    firstnameregex: 'FirstName only supports Alphabets',
    lastnameregex: 'LastName only supports Alphabets',
    contactregex: 'Contact should be 10 digits',
  requiredregex:"is required field",
  emailregex:'Invalid Email format',
  confirmpasswordregex:'Password mismatch'
  }
  const[boolean,setboolean]= useState({
    firstnameregex: false,
    lastnameregex: false,
    firstname:false,
    lastname:false,
    email:false,
    emailregex:false,
    password:false,
    confirmpassword:false,
    confirmpasswordregex:false,
    dob: false,
    gender: false,
    contact: false,
    contactregex:false,
  address:false,
  abled:true,
  });
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setboolean((prevstate)=>({...prevstate,[name]:false}))
    if(name!=="gender"){
      e.target.style.border="1px solid green"
        e.target.style.boxShadow="0 0 10px rgb(139, 220, 117)"}
    if(name==="password"){
      if(value===""){
        setboolean((prevstate)=>({...prevstate,abled:true}))
      }
      else{
      setboolean((prevstate)=>({...prevstate,abled:false}))
      }
    }
    if(name==="confirmpassword"){
      if(value===formData.password || value===""){
        setboolean((prevstate)=>({...prevstate,confirmpasswordregex:false}))
         e.target.style.border="1px solid green"
        e.target.style.boxShadow="0 0 10px rgb(139, 220, 117)"

      }else{
        setboolean((prevstate)=>({...prevstate,confirmpasswordregex:true}))
          e.target.style.border="1px solid rgb(255,0,0)"
        e.target.style.boxShadow="0 0 10px rgb(255,0,0)"

      }
    }
    if(name==="firstname"){
      let bool=nameregex.test(value)
      if(value==="" || bool){ 
        setboolean((prevstate)=>({...prevstate,firstnameregex:false}))
        e.target.style.border="1px solid green"
        e.target.style.boxShadow="0 0 10px rgb(139, 220, 117)"
      }
      else{
        setboolean((prevstate)=>({...prevstate,firstnameregex:true}))
          e.target.style.border="1px solid rgb(255,0,0)"
        e.target.style.boxShadow="0 0 10px rgb(255,0,0)"
    }
  }

    if(name==="lastname"){
      let bool=nameregex.test(value)
      if(value==="" || bool){ 
        setboolean((prevstate)=>({...prevstate,lastnameregex:false}))
                e.target.style.border="1px solid green"
        e.target.style.boxShadow="0 0 10px rgb(139, 220, 117)"
      }
      else{
        setboolean((prevstate)=>({...prevstate,lastnameregex:true}))
          e.target.style.border="1px solid rgb(255,0,0)"
        e.target.style.boxShadow="0 0 10px rgb(255,0,0)"
    }
    }
    if(name==="email"){
      let bool=emailregex.test(value)
      if(value==="" || bool){ 
        setboolean((prevstate)=>({...prevstate,emailregex:false}))
                e.target.style.border="1px solid green"
        e.target.style.boxShadow="0 0 10px rgb(139, 220, 117)"
      }
      else{
        setboolean((prevstate)=>({...prevstate,emailregex:true}))
          e.target.style.border="1px solid rgb(255,0,0)"
        e.target.style.boxShadow="0 0 10px rgb(255,0,0)"
    }
    }
    if(name==="contact"){
      let bool=contactregex.test(value)
      if(value==="" || bool){ 
        setboolean((prevstate)=>({...prevstate,contactregex:false}))
          e.target.style.border="1px solid green"
        e.target.style.boxShadow="0 0 10px rgb(139, 220, 117)"
      }
      else{
        setboolean((prevstate)=>({...prevstate,contactregex:true}))
          e.target.style.border="1px solid rgb(255,0,0)"
        e.target.style.boxShadow="0 0 10px rgb(255,0,0)"
    }
    }

  };
 let checkStatus=true
async function handleSubmit(e:React.MouseEvent<HTMLButtonElement>){
  if(e.currentTarget.name==="signin"){
    navigate('/login')
  }
  if(formData.firstname==="" && first_name.current){
    setboolean((prevstate)=>({...prevstate,firstname:true}))
          first_name.current.style.border="1px solid rgb(255,0,0)"
        first_name.current.style.boxShadow="0 0 10px rgb(255,0,0)"
    checkStatus=false
  }
  if(formData.lastname==="" && last_name.current){
    setboolean((prevstate)=>({...prevstate,lastname:true}))
     last_name.current.style.border="1px solid rgb(255,0,0)"
        last_name.current.style.boxShadow="0 0 10px rgb(255,0,0)"
    checkStatus=false
  }
  if(formData.email==="" && email.current){
    setboolean((prevstate)=>({...prevstate,email:true}))
     email.current.style.border="1px solid rgb(255,0,0)"
        email.current.style.boxShadow="0 0 10px rgb(255,0,0)"
    checkStatus=false
  }
  if(formData.password==="" && password.current){
    setboolean((prevstate)=>({...prevstate,password:true}))
     password.current.style.border="1px solid rgb(255,0,0)"
        password.current.style.boxShadow="0 0 10px rgb(255,0,0)"
    checkStatus=false
  }
  if(formData.confirmpassword==="" && confirm_password.current){
    setboolean((prevstate)=>({...prevstate,confirmpassword:true}))
     confirm_password.current.style.border="1px solid rgb(255,0,0)"
        confirm_password.current.style.boxShadow="0 0 10px rgb(255,0,0)"
    checkStatus=false
  }
  if(formData.dob==="" && dob.current){
    setboolean((prevstate)=>({...prevstate,dob:true}))
     dob.current.style.border="1px solid rgb(255,0,0)"
        dob.current.style.boxShadow="0 0 10px rgb(255,0,0)"
    checkStatus=false
  }
  if(formData.gender===""){
    setboolean((prevstate)=>({...prevstate,gender:true}))
    checkStatus=false
  }
  if(formData.contact==="" && contact.current){
    setboolean((prevstate)=>({...prevstate,contact:true}))
     contact.current.style.border="1px solid rgb(255,0,0)"
        contact.current.style.boxShadow="0 0 10px rgb(255,0,0)"
    checkStatus=false
  }
  if(formData.address==="" && address.current){
    setboolean((prevstate)=>({...prevstate,address:true}))
     address.current.style.border="1px solid rgb(255,0,0)"
        address.current.style.boxShadow="0 0 10px rgb(255,0,0)"
    checkStatus=false
  }
  else{
    if(checkStatus){
      try
    {const response=await postData(formData)
    console.log(response);
    
    if(response.status===200){
      alert(response.data.message)
    }
    navigate('/login')}   
    catch(error:any){
if(error.response.status===400){
  setShow(true)
}
    }
  }
    
  }
}
const [show, setShow] = useState(false);
const handleReset=()=>{
setFormData({firstname:"",lastname:"",email:"",password:"",confirmpassword:"",contact:"",dob:"",gender:"",address:""})
}
    return(
      <>
        <div className="mainform">
        {show && <div className='alertme'>
        <Alert variant="danger"  onClose={() => setShow(false)} dismissible >
                <Alert.Heading>Email Already Exists</Alert.Heading>
                <p>
                  Please SignIn your Account
                </p>
              </Alert>
              </div>}
            <h1 className="heading">Sign up</h1>
            <div className="row">
        <div>
          <label className="label">First Name:<span style={{color:"red"}}>*</span></label>
          <input type="text" name="firstname" ref={first_name} value={formData.firstname} onChange={handleChange} className="input" placeholder="Enter your Firstname"/>
          {boolean.firstname?<span style={{color:"red",display:"block"}}>First Name {validationmessage.requiredregex}</span>:<></>}
          {boolean.firstnameregex?<span style={{color:"red",display:"block"}}>{validationmessage.firstnameregex}</span>:<></>}
        </div>
        <div>
          <label className="label">Last Name:<span style={{color:"red"}}>*</span></label>
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className="input" ref={last_name} placeholder="Enter your Lastname"/>
          {boolean.lastname?<span style={{color:"red",display:"block"}}>Last Name {validationmessage.requiredregex}</span>:<></>}
          {boolean.lastnameregex?<span style={{color:"red",display:"block"}}>{validationmessage.lastnameregex}</span>:<></>}        
          </div>
        <div>
        <label className="label">Email:<span style={{color:"red"}}>*</span></label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="input" ref={email} placeholder="Enter your email"/>
          {boolean.email?<span style={{color:"red",display:"block"}}>Email {validationmessage.requiredregex}</span>:<></>}
          {boolean.emailregex?<span style={{color:"red",display:"block"}}>{validationmessage.emailregex}</span>:<></>} 
        </div>
        </div>
        <div className="row">
        <div>
        <label className="label">Password:<span style={{color:"red"}}>*</span></label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="input" ref={password} placeholder="Enter your password"/>
          {boolean.password?<span style={{color:"red",display:"block"}}>Password {validationmessage.requiredregex}</span>:<></>}
          </div>
        <div>
        <label className="label">Confirm Password:<span style={{color:"red"}}>*</span></label>
          <input type="password" name="confirmpassword" value={formData.confirmpassword} onChange={handleChange} ref={confirm_password} className="input" disabled={boolean.abled} placeholder="Confirm your password"/>
          {boolean.confirmpassword?<span style={{color:"red",display:"block"}}>Confirm Password {validationmessage.requiredregex}</span>:<></>}
          {boolean.confirmpasswordregex?<span style={{color:"red",display:"block"}}>{validationmessage.confirmpasswordregex}</span>:<></>}  
        </div>
        <div>
          <label className="label">Contact:<span style={{color:"red"}}>*</span></label>
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="input" ref={contact} placeholder="Enter your contact"/>
          {boolean.contact?<span style={{color:"red",display:"block"}}>Contact {validationmessage.requiredregex}</span>:<></>}
          {boolean.contactregex?<span style={{color:"red",display:"block"}}>{validationmessage.contactregex}</span>:<></>}        
          </div>
        </div>
        <div className="row">
        <div>
          <label className="label">Gender:<span style={{color:"red"}}>*</span></label>
          <input type="radio" name="gender" value="Male" onChange={handleChange} style={{width:"15px",height:"15px"}} id="male" checked={formData.gender==="Male"} /> 
          <label htmlFor="male"> Male </label>
          <input type="radio" name="gender" value="Female" onChange={handleChange} style={{width:"15px",height:"15px"}} id="female" checked={formData.gender==="Female"} /> 
          <label htmlFor="female"> Female</label>
          {boolean.gender?<span style={{color:"red",display:"block"}}>Gender {validationmessage.requiredregex}</span>:<></>}
        </div>
        <div>
                      <label className="label">Date of Birth:<span style={{color:"red"}}>*</span></label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="input" ref={dob} placeholder="Enter DOB"/>
          {boolean.dob?<span style={{color:"red",display:"block"}}>DOB {validationmessage.requiredregex}</span>:<></> }   
        </div>
        <div>
        <label className="label">Address:<span style={{color:"red"}}>*</span></label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} className="input" ref={address} placeholder="Enter your address"/>
          {boolean.address?<span style={{color:"red",display:"block"}}>Address {validationmessage.requiredregex}</span>:<></> } 
        </div>
        </div>
        <div className="row existing">
          <span style={{display:"inline-block",margin:"0% 0% 2%",padding:"0% 40%"}}>Already have an account? <button className='sign'onClick={handleSubmit} name="signin">Sign In</button></span>
        </div>
        <button  onClick={handleSubmit} className="submit button">Submit</button>
        <button  onClick={handleReset} className="reset button">Reset</button>
        </div>
        </>
    );
}
export default Myform