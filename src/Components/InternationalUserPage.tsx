import { useRef ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
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
  if (videoRef.current) {
    videoRef.current.play().catch((error: any) => {
      console.error("Error attempting to play", error);
    });
  }
}, []);
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
            <div className="sheets">
              <h4>East Asia and Pacific</h4>
              <span>
                This region includes countries like China, Japan, and Australia.
                It is known for its diverse cultures, rapid economic growth, and
                significant technological advancements
              </span>
            </div>
            <div className="sheets">
              <h4>Europe and Central Asia</h4>
              <span>
                Encompassing Western Europe to Central Asia, this region
                includes nations such as Germany, Russia, and Kazakhstan. It is
                characterized by its historical significance, economic
                diversity, and political influence
              </span>
            </div>
            <div className="sheets">
              <h4> Latin America and the Caribbean</h4>
              <span>
                This region includes countries from Mexico to Argentina and the
                Caribbean islands. It is known for its rich cultural heritage,
                biodiversity, and vibrant economies
              </span>
            </div>
            <div className="sheets">
              <h4>Middle East and North Africa</h4>
              <span>
                This region includes countries like Saudi Arabia, Egypt, and
                Morocco. It is known for its historical sites, oil reserves, and
                diverse cultures
              </span>
            </div>
            <div className="sheets">
              <h4>North America</h4>
              <span>
                Comprising the United States, Canada, and Mexico, this region is
                known for its economic power, cultural influence, and
                technological innovation
              </span>
            </div>
            <div className="sheets">
              <h4>South Asia</h4>
              <span>
                This region includes countries like India, Pakistan, and
                Bangladesh. It is known for its dense population, cultural
                diversity, and significant economic growth
              </span>
            </div>
            <div className="sheets">
              <h4>Sub-Saharan Africa</h4>
              <span>
                This region includes countries south of the Sahara Desert, such
                as Nigeria, Kenya, and South Africa. It is known for its
                cultural diversity, natural resources, and developmental
                challenges
              </span>
            </div>
          </div>
        </div>
      </>
    );
}
export default InterUser;