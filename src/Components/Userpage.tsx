import { useContext, useEffect, useRef, useState} from "react";
import beachwaves from './beachwaves.mp4';
import userpagelogo from '../Assets/Designer.png'
import { getMembership } from "../Service/Formservice";
import Detailspage from './Common Components/Detailspage'
import FooterComponent from "./Common Components/FooterPage";
import {useNavigate } from "react-router-dom";
import { getCity } from "../Service/TourService";
import { MyContext } from "../App";
import Marquee from "react-fast-marquee";
// Reference  -> https://themewagon.github.io/vacation/index.html
const UserPage:React.FC=()=>{
    const videoRef=useRef<HTMLVideoElement>(null)
    const navigate=useNavigate()
   const context = useContext(MyContext)
  if (!context) { //because your context may also be undefined
    throw new Error('MyComponent must be used within a MyProvider');
  }
  const { email } = context;
  useEffect(() => {
      window.scrollTo(0,0)
      membershipData()
        if (videoRef.current) {
          videoRef.current.play().catch((error:any) => {
            console.error('Error attempting to play', error);
          });
        }
      }, []);
      const[membership,setmembership]=useState([])
      const[place,setplace]=useState([])
      const[videourl,seturl]=useState({videosrc:"",content:""})
      const scrollbar=useRef<HTMLDivElement | null>(null)
      const membershipData=async ()=>{
      const response=await getMembership()
      setmembership(response.data)
      }
      const MembershipBinding=()=>{
        return membership?.map((el:any)=>{
          return <option value={el.Membership} id={el.membershipId}>{el.Membership}</option>
        })
      }
      const placeData=async(value:string)=>{
        const response=await getCity(value)
        setplace(response.data)
        }
        const Placebinding=()=>{
          return place?.map((el:any)=>{
            return <option value={el.videosrc} id={el.name}>{el.name}</option>
          })
        }
      const scrollme=(e:React.MouseEvent<HTMLImageElement>)=>{
        if(e.currentTarget.id==="leftbutton" && scrollbar.current){
          scrollbar.current.style.scrollBehavior="smooth"
        scrollbar.current.scrollLeft+=1360;
        }
        if(e.currentTarget.id==="rightbutton" && scrollbar.current){
          scrollbar.current.style.scrollBehavior="smooth"
          scrollbar.current.scrollLeft-=1360;
          }
      }
const feedbackBinding=()=>{
  return<>
  <div className="internalcontainer">
        <div className="sliderbox">
          <div>
            <p style={{padding:"5% 10%"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laudantium ratione culpa provident beatae, 
              minima alias maiores optio molestias. Libero quis ab explicabo temporibus minus dolorum, eum delectus asperiores consectetur.</p>
          </div>
            <div style={{padding:"5% 10%"}}>
              <img src="https://images.pexels.com/photos/2658834/pexels-photo-2658834.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{borderRadius:"50%",float:"left",width:"30%",height:"30%"}}/>
              <span style={{marginTop:"2.5%",display:"inline-block",marginLeft:"10%",fontSize:"2rem"}}>Kalai selvan</span>
              <span style={{display:"inline-block",marginLeft:"10%",fontSize:"1.2rem"}}>TravelBuddy User</span>
            </div>
        </div>
        <div className="sliderbox">
        <div>
            <p style={{padding:"5% 10%"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laudantium ratione culpa provident beatae, 
              minima alias maiores optio molestias. Libero quis ab explicabo temporibus minus dolorum, eum delectus asperiores consectetur.</p>
          </div>
            <div style={{padding:"5% 10%"}}>
              <img src="https://images.pexels.com/photos/2658834/pexels-photo-2658834.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{borderRadius:"50%",float:"left",width:"30%",height:"30%"}}/>
              <span style={{marginTop:"2.5%",display:"inline-block",marginLeft:"10%",fontSize:"2rem"}}>Kalai selvan</span>
              <span style={{display:"inline-block",marginLeft:"10%",fontSize:"1.2rem"}}>TravelBuddy User</span>
            </div>
        </div>
        <div className="sliderbox">
        <div>
            <p style={{padding:"5% 10%"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laudantium ratione culpa provident beatae, 
              minima alias maiores optio molestias. Libero quis ab explicabo temporibus minus dolorum, eum delectus asperiores consectetur.</p>
          </div>
            <div style={{padding:"5% 10%"}}>
              <img src="https://images.pexels.com/photos/2658834/pexels-photo-2658834.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{borderRadius:"50%",float:"left",width:"30%",height:"30%"}}/>
              <span style={{marginTop:"2.5%",display:"inline-block",marginLeft:"10%",fontSize:"2rem"}}>Kalai selvan</span>
              <span style={{display:"inline-block",marginLeft:"10%",fontSize:"1.2rem"}}>TravelBuddy User</span>
            </div>
        </div>
      </div></>
}
const handlechange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
  const{name,value}=e.target  
  if(name==="Adventuretype"){
    placeData(value.replace(/\s+/g, '').trim())
  }
  if(name==="place"){
    const selectedOption = e.target.options[e.target.selectedIndex];
        const id = selectedOption.id;
    console.log(id,"kkkkkkkkkkkkkkkkkkkkk");
    
seturl({videosrc:value,content:id});
  }
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
    return (
      <>
        <div className="usermain">
          <div className="video-container1">
            <video ref={videoRef} autoPlay muted loop>
              <source src={beachwaves} type="video/mp4" />
            </video>
          </div>
          <div className="header">
            <img src={userpagelogo} alt="logo" className="logo" />
            <nav className="usernavbar">
              <ul>
                <li style={{ color: "blue" }}>Home</li>
                <li
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About
                </li>
                <li
                  onClick={() => {
                    navigate("/destination");
                  }}
                >
                  Destination
                </li>
                <li
                  onClick={() => {
                    navigate("/fav");
                  }}
                >
                  Favorites
                </li>
                <li
                  onClick={() => {
                    navigate("/blog");
                  }}
                >
                  Blog
                </li>
                <li
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact
                </li>
                <li>
                  <button className="booknow" onClick={onBook}>
                    Book Now
                  </button>
                </li>
                <li>
                  <button
                    className="booknow"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <Marquee
            style={{
              position: "absolute",
              top: "15%",
              fontWeight: "bolder",
              color: "yellow",
            }}
            direction="left"
            speed={100}
            pauseOnHover={true}
            gradient={true}
            gradientWidth={200}
          >
            Exciting News! We are thrilled to announce the launch of our
            brand-new international tours, offering unforgettable experiences
            across the globe.
          </Marquee>
          <div className="userbody">
            <button className="maincenter showusername" onClick={()=>navigate('/interuser')}>
             Explore our International Trips!
            </button>
            <span className="maincenter username">Hi Buddy,</span>
            <span className="maincenter maincenter1">
              Travel to any place in India with ease and comfort
            </span>
            <span className="maincenter maincenter2">
              Make Your Trip Amazing With Us
            </span>
          </div>
          <div className="searchpanel">
            <span style={{ fontWeight: "bolder", marginLeft: "5%" }}>
              Where to go?{" "}
            </span>
            <label htmlFor="adv">Adventure Type</label>
            <select
              name="Adventuretype"
              id="adv"
              className="input userpageinput"
              onChange={handlechange}
            >
              <option value="">Select...</option>
              {MembershipBinding()}
              {}
            </select>
            <label htmlFor="date">Where ?</label>
            <select
              name="place"
              id="date"
              className="input userpageinput"
              onChange={handlechange}
            >
              <option value="">Select...</option>
              {Placebinding()}
              {}
            </select>
            <button
              className="userpagebutton"
              onClick={() => {
                navigate("/video", { state: { url: videourl } });
              }}
            >
              Search
            </button>
          </div>
        </div>
        <Detailspage></Detailspage>
        <div className="bestplace">
          <h1 style={{ margin: "10% 0% 5%", textAlign: "center" }}>
            Best Place Destination
          </h1>
          <div className="bestplacecontainer">
            <div className="munnar">
              <span>Munnar</span>
            </div>
            <div>
              <span>Goa</span>
            </div>
            <div>
              <span>Gir Forest</span>
            </div>
            <div>
              <span>Manali</span>
            </div>
          </div>
        </div>
        <div className="bestpackages">
          <h1 style={{ margin: "10% 0% 5%", textAlign: "center" }}>
            Top Tour Packages
          </h1>
          <div className="packagescontainer">
            <div className="packages">
              <img
                src="https://cdn.pixabay.com/photo/2020/03/29/16/17/sky-4981306_640.jpg"
                alt=""
                className="packageimage"
              />
              <span className="packagespan">Darjeeling</span>
              <span
                style={{
                  color: "black",
                  fontSize: "1.2rem",
                  display: "block",
                  margin: "2% 3%",
                }}
              >
                4 Days Tour
              </span>
              <span
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  display: "block",
                  margin: "3% 3%",
                }}
              >
                ₹6000/person
              </span>
              <img
                src="https://cdn-icons-png.flaticon.com/128/16645/16645681.png"
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "-15px 1% 3% 3%",
                }}
              />
              <span
                style={{ color: "black", fontSize: "1.5rem", marginLeft: "1%" }}
              >
                Darjeeling,West Bengal
              </span>
              <br />
              <img
                src="https://cdn-icons-png.flaticon.com/128/561/561611.png"
                alt=""
                className="packageicons"
              />{" "}
              Food
              <img
                src="https://cdn-icons-png.flaticon.com/128/8948/8948845.png"
                alt=""
                className="packageicons"
              />{" "}
              Stay
              <img
                src="https://cdn-icons-png.flaticon.com/128/619/619010.png"
                alt=""
                className="packageicons"
              />{" "}
              Near Mountain
            </div>
            <div className="packages">
              <img
                src="https://media.gettyimages.com/id/1134245443/photo/happy-tourists-riding-indian-elephants.jpg?s=612x612&w=0&k=20&c=IXAKi19unuPnyE-xv0vlxx7SBtcw_oty47QXfoXPonY="
                alt=""
                className="packageimage"
              />
              <div>
                <span className="packagespan">Periyar Wildlife sanctuary</span>
              </div>
              <span
                style={{
                  color: "black",
                  fontSize: "1.2rem",
                  display: "block",
                  margin: "2% 3%",
                }}
              >
                3 Days Tour
              </span>
              <span
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  display: "block",
                  margin: "3% 3%",
                }}
              >
                ₹8000/person
              </span>
              <img
                src="https://cdn-icons-png.flaticon.com/128/16645/16645681.png"
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "-15px 1% 3% 3%",
                }}
              />
              <span
                style={{ color: "black", fontSize: "1.5rem", marginLeft: "1%" }}
              >
                Periyar Wildlife Sanctuary,Kerala
              </span>
              <br />
              <img
                src="https://cdn-icons-png.flaticon.com/128/561/561611.png"
                alt=""
                className="packageicons"
              />{" "}
              Food
              <img
                src="https://cdn-icons-png.flaticon.com/128/8948/8948845.png"
                alt=""
                className="packageicons"
              />{" "}
              Stay
              <img
                src="https://cdn-icons-png.flaticon.com/128/2913/2913520.png"
                alt=""
                className="packageicons"
              />{" "}
              Near Forest
            </div>
            <div className="packages">
              <img
                src="https://th.bing.com/th/id/OIP.bJk2PMTZVmYBCHBzbNrojgHaEK?w=319&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
                className="packageimage"
              />
              <span className="packagespan">Kochi</span>
              <span
                style={{
                  color: "black",
                  fontSize: "1.2rem",
                  display: "block",
                  margin: "2% 3%",
                }}
              >
                7 Days Tour
              </span>
              <span
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  display: "block",
                  margin: "3% 3%",
                }}
              >
                ₹12000/person
              </span>
              <img
                src="https://cdn-icons-png.flaticon.com/128/16645/16645681.png"
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "-15px 1% 3% 3%",
                }}
              />
              <span
                style={{ color: "black", fontSize: "1.5rem", marginLeft: "1%" }}
              >
                Kochi,Kerala
              </span>
              <br />
              <img
                src="https://cdn-icons-png.flaticon.com/128/561/561611.png"
                alt=""
                className="packageicons"
              />{" "}
              Food
              <img
                src="https://cdn-icons-png.flaticon.com/128/8948/8948845.png"
                alt=""
                className="packageicons"
              />{" "}
              Stay
              <img
                src="https://cdn-icons-png.flaticon.com/128/2664/2664593.png"
                alt=""
                className="packageicons"
              />{" "}
              Near Beach
            </div>
            <div className="packages">
              <img
                src="https://media.gettyimages.com/id/1503422149/photo/high-angle-view-of-townscape-against-sky-ooty-tamil-nadu-india.jpg?s=612x612&w=0&k=20&c=oVGPH3VQ8iuxE7tr-FDBIIrRY0XODz3yYTjmyVETf2A="
                alt=""
                className="packageimage"
              />
              <span className="packagespan">Ooty</span>
              <span
                style={{
                  color: "black",
                  fontSize: "1.2rem",
                  display: "block",
                  margin: "2% 3%",
                }}
              >
                5 Days Tour
              </span>
              <span
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  display: "block",
                  margin: "3% 3%",
                }}
              >
                ₹7000/person
              </span>
              <img
                src="https://cdn-icons-png.flaticon.com/128/16645/16645681.png"
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "-15px 1% 3% 3%",
                }}
              />
              <span
                style={{ color: "black", fontSize: "1.5rem", marginLeft: "1%" }}
              >
                Ooty,Tamil Nadu
              </span>
              <br />
              <img
                src="https://cdn-icons-png.flaticon.com/128/561/561611.png"
                alt=""
                className="packageicons"
              />{" "}
              Food
              <img
                src="https://cdn-icons-png.flaticon.com/128/8948/8948845.png"
                alt=""
                className="packageicons"
              />{" "}
              Stay
              <img
                src="https://cdn-icons-png.flaticon.com/128/619/619010.png"
                alt=""
                className="packageicons"
              />{" "}
              Near Mountain
            </div>
            <div className="packages">
              <img
                src="https://media.gettyimages.com/id/505566832/photo/great-indian-rhino.jpg?s=612x612&w=0&k=20&c=vzIv_sG4mJik2A4y2yJQsCzfBZbJmaJuIEafEz0VUK0="
                alt=""
                className="packageimage"
              />
              <span className="packagespan">Kaziranga National Park</span>
              <span
                style={{
                  color: "black",
                  fontSize: "1.2rem",
                  display: "block",
                  margin: "2% 3%",
                }}
              >
                4 Days Tour
              </span>
              <span
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  display: "block",
                  margin: "3% 3%",
                }}
              >
                ₹9000/person
              </span>
              <img
                src="https://cdn-icons-png.flaticon.com/128/16645/16645681.png"
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "-15px 1% 3% 3%",
                }}
              />
              <span
                style={{ color: "black", fontSize: "1.5rem", marginLeft: "1%" }}
              >
                Kaziranga National Park,Assam
              </span>
              <br />
              <img
                src="https://cdn-icons-png.flaticon.com/128/561/561611.png"
                alt=""
                className="packageicons"
              />{" "}
              Food
              <img
                src="https://cdn-icons-png.flaticon.com/128/8948/8948845.png"
                alt=""
                className="packageicons"
              />{" "}
              Stay
              <img
                src="https://cdn-icons-png.flaticon.com/128/2913/2913520.png"
                alt=""
                className="packageicons"
              />{" "}
              Near Forest
            </div>
            <div className="packages">
              <img
                src="https://media.gettyimages.com/id/522676626/photo/gateway-of-india-is-in-the-heart-of-mumbais-tourist-district-and-is-the-cittys-most-famous.jpg?s=612x612&w=0&k=20&c=tmDQS6so5xDpxCmvjQ_SZIux4N-TxKreIxVbgoTldEc="
                alt=""
                className="packageimage"
              />
              <span className="packagespan">Mumbai</span>
              <span
                style={{
                  color: "black",
                  fontSize: "1.2rem",
                  display: "block",
                  margin: "2% 3%",
                }}
              >
                9 Days Tour
              </span>
              <span
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  display: "block",
                  margin: "3% 3%",
                }}
              >
                ₹10000/person
              </span>
              <img
                src="https://cdn-icons-png.flaticon.com/128/16645/16645681.png"
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "-15px 1% 3% 3%",
                }}
              />
              <span
                style={{ color: "black", fontSize: "1.5rem", marginLeft: "1%" }}
              >
                Mumbai,Maharashtra
              </span>
              <br />
              <img
                src="https://cdn-icons-png.flaticon.com/128/561/561611.png"
                alt=""
                className="packageicons"
              />{" "}
              Food
              <img
                src="https://cdn-icons-png.flaticon.com/128/8948/8948845.png"
                alt=""
                className="packageicons"
              />{" "}
              Stay
              <img
                src="https://cdn-icons-png.flaticon.com/128/2664/2664593.png"
                alt=""
                className="packageicons"
              />{" "}
              Near Beach
            </div>
          </div>
        </div>
        <div className="touristfeedback">
          <h1 style={{ margin: "10% 0% 5%", textAlign: "center" }}>
            Tourist Feedback
          </h1>
          <div className="sliderwrapper">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2609/2609370.png"
              alt=""
              className="arrowbutton"
              id="leftbutton"
              onClick={scrollme}
            />
            <div className="slider" ref={scrollbar}>
              {feedbackBinding()}
              {feedbackBinding()}
              {feedbackBinding()}
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/318/318476.png"
              alt=""
              className="arrowbutton"
              id="rightbutton"
              onClick={scrollme}
            />
          </div>
        </div>
        <FooterComponent></FooterComponent>
      </>
    );
}
export default UserPage