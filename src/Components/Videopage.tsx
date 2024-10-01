import { useEffect, useRef } from "react";
import ReactPlayer from 'react-player';
import { useLocation, useNavigate } from "react-router-dom";
const Videopage=()=>{
    const videoRef=useRef<HTMLVideoElement>(null)
    useEffect(() => {
        if (videoRef.current) {
          videoRef.current.play().catch((error:any) => {
            console.error('Error attempting to play', error);
          });
        }
      }, []);
      const location=useLocation()
      const Navigate=useNavigate()
      const{url}=location.state || ""
return <>
{url.videosrc!=="" && <div className="video-background">
      <ReactPlayer
        url={url.videosrc}
        playing
        loop
        width="100%"
        height="100%"
        className="react-player"
      />
      <div className="content">
        <h4 onClick={()=>{Navigate('/')}}>&lt;Go Back</h4>
      </div>
  </div>}
  {url.videosrc === "" && <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column"}}
  ><h1>No Video is Selected</h1>
    <h3 style={{textDecoration:"underline",cursor:"pointer",color:"blueviolet"}} onClick={()=>Navigate('/')}>Go to Home</h3>
  </div>}
</>
}
export default Videopage;