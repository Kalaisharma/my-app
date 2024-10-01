import { useRef } from "react"

const TouristFeedback=()=>{
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
      const scrollbar=useRef<HTMLDivElement | null>(null)
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
    return <>
     <div className="touristfeedback">
      <h1 style={{margin:"10% 0% 5%",textAlign:"center"}}>Tourist Feedback</h1>
      <div className="sliderwrapper">
<img src="https://cdn-icons-png.flaticon.com/128/2609/2609370.png" alt="" className="arrowbutton" id="leftbutton" onClick={scrollme} />    
<div className="slider" ref={scrollbar}>
        {feedbackBinding()}
        {feedbackBinding()}
        {feedbackBinding()}
      </div>
<img src="https://cdn-icons-png.flaticon.com/128/318/318476.png" alt="" className="arrowbutton" id="rightbutton" onClick={scrollme}/>
      </div>
      </div>
    </>
}
export default TouristFeedback;