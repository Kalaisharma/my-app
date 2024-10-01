import React, { useState } from 'react'
import forgotpassword from '../Assets/forgotpasswordicon.png'
import {emailExist} from '../Service/Formservice'
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { emailtype } from '../Interfaces/Interface';
const Forgotpassword=()=>{
    const [message,setmessage]=useState({
alerthead:'',
alertsub:''
    })
    const navigate=useNavigate()
    const [emaildata,setemaildata]=useState<emailtype>({email:''})
    const[alert,setalert]=useState(false)
    const [emailboolean,setboolean]=useState({email:false})
    const onSubmit=async(e:React.MouseEvent<HTMLButtonElement>)=>{
        const{name}=e.currentTarget
        if(name==="forgotpass"){
        if(emaildata.email===""){
            setboolean((prevstate)=>({...prevstate,email:true}))
        }
        else{
           try{ 
            const response=await emailExist(emaildata)
            if(response.status===200){
navigate('/newpassword',{state:{email:emaildata.email}})
            }
            }
            catch(error:any){
                if(error.response.status===400){
                    setmessage((prevstate)=>({...prevstate,alerthead:'Incorrect Email'}))
                    setmessage((prevstate)=>({...prevstate,alertsub:'Please provide the correct email'}))
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
    }
    return<>
<div className="forgotpass">
        {alert && <div className='alertme'>
        <Alert variant="danger"  onClose={() => setalert(false)} dismissible >
                <Alert.Heading>{message.alerthead}</Alert.Heading>
                <p>
                  {message.alertsub}
                </p>
              </Alert>
              </div>}
        <div className="forgotcontainer">
            <img src={forgotpassword} alt="icon" style={{width:"70px",height:"70px",display:"block",margin:"0% 40% 2%"}} />
        <span className="h3">Forgot your Password?</span>
        <label htmlFor="email" className="forgot-label">Email <span style={{color:"red"}}>*</span></label>
        <input type="email" id="email" name="email" className="forgot-input input" value={emaildata.email} onChange={handleChange}/>
        {emailboolean.email && <span style={{color:"red",display:"block",left:"63.5%",position:"absolute"}}>Email is required</span>}
        <button className="update"name='forgotpass' onClick={onSubmit}>Change Password</button>
        </div>
    </div>
    </>
}
export default Forgotpassword