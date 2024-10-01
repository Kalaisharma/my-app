import { useContext, useEffect, useRef, useState } from 'react';
import loginicon from '../Assets/account-protection.png'
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyContext } from '../App';
import { LogindataType } from '../Interfaces/Interface';
import { checklogin } from '../Service/Formservice';


const Login:React.FC=()=>{
  const context = useContext(MyContext)
  if (!context) { //because your context may also be undefined
    throw new Error('MyComponent must be used within a MyProvider');
  }
  const { setemail } = context;
    const videoRef = useRef<HTMLVideoElement>(null);
    const navigate=useNavigate()
    let emailregex=/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm
const[logindata,setlogindata]=useState<LogindataType>({email:'',password:''})
const[boolean,setboolean]=useState({email:false,emailregex:false,password:false})
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error:any) => {
          console.error('Error attempting to play', error);
        });
      }
    }, []);
      const [show, setShow] = useState(false);

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
const{value,id}=e.target 
setboolean((prevstate)=>({...prevstate,[id]:false}))

setlogindata({...logindata,[id]:value})
if(id==="email"){
    let bool=emailregex.test(value)
    if(value==="" || bool){ 
      setboolean((prevstate)=>({...prevstate,emailregex:false}))
    }
    else{
      setboolean((prevstate)=>({...prevstate,emailregex:true}))
  }
  }
    }
    const handleSubmit=async(e:React.MouseEvent<HTMLButtonElement>)=>{
        let checkStatus = true
      if(logindata.email===""){
        setboolean((prevstate)=>({...prevstate,email:true}))
        checkStatus=false
      }
      if(logindata.password===""){
        setboolean((prevstate)=>({...prevstate,password:true}))
        checkStatus=false
      }
      if(e.currentTarget.name==="signup"){
        navigate('/signup')
      }
      if(checkStatus){
        console.log(logindata);
    try{    
const response=await checklogin(logindata)
if(response.status===200){
  alert("success")
  setemail(logindata.email)
  sessionStorage.setItem('email', logindata.email); // Store email in session storage
  navigate('/')
  setlogindata({email:"",password:""})
}
      }
      catch(error:any){
        if(error.response.status===400){
         setShow(true)
        }
      }
    }
    }
    const navigateForgot=()=>{
      navigate('/forgotpassword')
    }
    return <>
    <div className="loginform">
    {show && <div className='alertme alertdiv'>
    <Alert variant="danger"  onClose={() => setShow(false)} dismissible >
            <Alert.Heading>Invalid Email or Password</Alert.Heading>
            <p>
              Please Try Again
            </p>
          </Alert>
          </div>}
          <div className="video-container">
<video ref={videoRef} autoPlay muted loop>
        <source src="https://videos.pexels.com/video-files/3135808/3135808-hd_1920_1080_24fps.mp4" type="video/mp4" />
      </video>
    </div>
<div className="innercontainer">
    <img src={loginicon} alt="loginicon" className='loginicon'/>
          <h1 style={{ marginLeft: "40%", color: "rgb(0,0,0,0.8)" }}>USER LOGIN</h1>
    <label htmlFor="email" className="label loginlabel">Email<span style={{color:"red"}}>*</span></label>
    <input type="email" id="email" className="input login" value={logindata.email} onChange={handleChange}/>
    {boolean.email?<span style={{color:"red",display:"block",marginLeft:"25%"}}>Email is required</span>:<></>}
          {boolean.emailregex?<span style={{color:"red",display:"block",marginLeft:"25%"}}>Incorrect Email</span>:<></>}  
    <label htmlFor="password" className="label loginlabel">Password<span style={{color:"red"}}>*</span></label>
    <input type="password" id="password" className="input login"  value={logindata.password} onChange={handleChange}/>
    {boolean.password?<span style={{color:"red",display:"block",marginLeft:"25%"}}>Password is required</span>:<></>}
    <button className='forgot'onClick={navigateForgot}>Forgot Password</button>
    <button className="button submit logbutton" onClick={handleSubmit}>Submit</button>
    <span style={{display:"inline-block",marginLeft:"37%",marginBottom:"3%"}}>New User?
      <button className='sign'name="signup" onClick={handleSubmit}> Sign Up</button>
      </span>
</div>
    </div>
    </>
}
export default Login