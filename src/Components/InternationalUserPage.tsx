import { useRef ,useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { getRegions } from "../Service/Internationalservice";
// East Asia and Pacific
// Europe and Central Asia
// Latin America and the Caribbean
// Middle East and North Africa
// North America
// South Asia
// Sub-Saharan Africa
const InterUser = () => {
        const videoRef = useRef<HTMLVideoElement>(null);
useEffect(() => {
  window.scrollTo(0, 0);
  getmyregions()
  if (videoRef.current) {
    videoRef.current.play().catch((error: any) => {
      console.error("Error attempting to play", error);
    });
  }
}, []);
  const tointerPlaces = (el: any) => {
    navigate("/interplaces", { state: { refid: el.RegionsRefID } });
 }
  const[regiondata,setregiondata]=useState([])
  const getmyregions = async() => {
    const result = await getRegions();
    if (result?.status === 200) {
      setregiondata(result.data);
    }
  }
  const regionbinding = () => {
    console.log(regiondata,"region");
    
    return regiondata.map((el:any) => {
      return (
        <>
          <div
            className="sheets"
            id={el.RegionsRefID}
            onClick={() => tointerPlaces(el)}
          >
            <h4>{el.region_name}</h4>
            <span>{el.description}</span>
          </div>
        </>
      );
    })
  }
    const navigate=useNavigate()
    return (
      <>
        <div className="interusermain">
          <div className="header">
            <span className="interlogo">Travel Buddy</span>
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
                  <button className="booknow">Book Now</button>
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
          <div className="intertoursheets">
            {regionbinding()}
                     </div>
        </div>
      </>
    );
}
export default InterUser;