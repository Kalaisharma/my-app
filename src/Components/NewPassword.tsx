import { useEffect, useState } from "react"
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { updatepassword } from "../Service/Formservice";
import newpassword from '../Assets/newpassword.png'
import { useLocation, useNavigate } from "react-router-dom";

const NewPassword=()=>{
    const [message,setmessage]=useState({
        alerthead:'',
        alertsub:''
            })
    const {state}=useLocation()
    const navigate=useNavigate()
    useEffect(()=>{
        if(state){
            setemaildata((prevstate)=>({...prevstate,email:state.email}))
        }
    },[])
    const [emaildata,setemaildata]=useState({email:'',password:'',confirmpassword:''})
    const[alert,setalert]=useState(false)
    const [emailboolean,setboolean]=useState({password:false,confirmpassword:false,confirmpasswordregex:false,isabled:true,isconfirmed:false})
    const onSubmit=async(e:React.MouseEvent<HTMLButtonElement>)=>{
        const{name}=e.currentTarget
      if(name==='newpass'){  
        let check=true 
        if(emaildata.password===""){
            setboolean((prevstate)=>({...prevstate,password:true}))
            check=false 
        } if(emaildata.confirmpassword===""){
            setboolean((prevstate)=>({...prevstate,confirmpassword:true}))
            check=false
        }
        if(check){
            try{ 
                const response=await updatepassword(emaildata)
                console.log(response,"response");
                debugger
                if(response?.status===200){
                        navigate('/login')
                }
                }
                catch(error:any){
                    if(error.response?.status===400){
                        setmessage((prevstate)=>({...prevstate,alerthead:'Something went wrong'}))
                    setmessage((prevstate)=>({...prevstate,alertsub:'Try again later'}))
                        setalert(true)
                    }
                }
        }
}
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const{value,name}=e.target
        setboolean((prevstate)=>({...prevstate,[name]:false}))
     setemaildata((prevstate)=>({...prevstate,[name]:value}))
     if(name==='password'){
        if(value===""){
            setboolean((prevstate)=>({...prevstate,isabled:true}))
        }else{
            setboolean((prevstate)=>({...prevstate,isabled:false}))
        }
    }
     if(name==='confirmpassword'){
if(value!==emaildata.password){
    setboolean((prevstate)=>({...prevstate,confirmpasswordregex:true}))
}else{
    setboolean((prevstate)=>({...prevstate,confirmpasswordregex:false}))
}
     }
    }
    return<>
   <div className="newpass">
   {alert && <div className='alertme'>
        <Alert variant="danger"  onClose={() => setalert(false)} dismissible >
                <Alert.Heading>{message.alerthead}</Alert.Heading>
                <p>
                  {message.alertsub}
                </p>
              </Alert>
              </div>}
        <div className="newpasscontainer">
            <img src={newpassword} alt="icon" style={{width:"70px",height:"70px",display:"block",margin:"0% 40% 2%"}} />
        <span className="h3">Change you password</span>
        <label htmlFor="email" className="forgot-label">Email <span style={{color:"red"}}>*</span></label>
        <input type="email" id="email" className="forgot-input input" value={emaildata.email} disabled/>
        {/* {emailboolean.email && <span style={{color:"red",display:"block",left:"13.5%",position:"absolute"}}>Email is required</span>} */}
        
        <label className="forgot-label">Password:<span style={{color:"red"}}>*</span></label>
          <input type="password" name="password" value={emaildata.password} onChange={handleChange} className="forgot-input input" placeholder="Enter password"/>
          {emailboolean.password?<span style={{color:"red",display:"block",left:"13.5%",position:"absolute"}}>Password</span>:<></>}
       
        <label className="forgot-label">Confirm Password:<span style={{color:"red"}}>*</span></label>
          <input type="password" name="confirmpassword" value={emaildata.confirmpassword} onChange={handleChange} className="forgot-input input" disabled={emailboolean.isabled} placeholder="Enter new password"/>
          {emailboolean.confirmpassword?<span style={{color:"red",display:"block",left:"13.5%",position:"absolute"}}>Confirm Password </span>:<></>}
          {emailboolean.confirmpasswordregex?<span style={{color:"red",display:"block",left:"13.5%",position:"absolute"}}>Password Mismatch</span>:<></>}  
        <button className="update" name="newpass" onClick={onSubmit}>Update Password</button>
        </div>
    </div>
    </>
}
export default NewPassword