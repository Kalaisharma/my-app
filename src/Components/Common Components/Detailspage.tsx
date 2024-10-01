import location from '../../Assets/minilogos/location.png'
import locationpin from '../../Assets/minilogos/location-pin.png'
import summercamp from '../../Assets/minilogos/summer-camp.png'
import destination from '../../Assets/minilogos/destination.png'
import { useNavigate } from 'react-router-dom'
const Detailspage:React.FC = () => {
return<>
 <div className="useradd1">
<div className="leftplane plane visible">
<div>
  <img src={location} alt="location logo" />
  <h4>Personal Guide</h4>
  <p>Explore destinations with the expertise of a personal guide, ensuring every moment is enriched with local insights and hidden gems.</p>
</div>
<div>
<img src={locationpin} alt="locationpin logo" />
<h4>Location Manager</h4>
<p>Our app’s location manager ensures you never miss a landmark or hidden gem.</p>
</div>
<div>
<img src={summercamp} alt="summaercamp logo" />
<h4>Activities</h4>
<p>From thrilling outdoor adventures to relaxing cultural experiences, our app offers a wide range of activities to suit every traveler.</p>
</div>
<div>
<img src={destination} alt="destination logo" />
<h4>Travel Arrangements</h4>
<p>Plan your journey with ease using our app’s comprehensive travel arrangement features.</p>
</div>
</div>
<div className="rightplane plane visible">
<h1 style={{marginTop:"25%"}} className='adventure'>It's time to start your</h1>
<h1 className='adventure'>adventure...</h1>
<p>Embark on an unforgettable adventure with our tour app!🌍✨ Whether you’re craving 
  the thrill of mountain climbing, the serenity of a coastal hike, or the excitement of a city exploration, 
  our app has it all. With just a few taps, you can book your next adventure and dive into 
  a world of new experiences. Our user-friendly interface ensures a seamless booking process, 
  so you can focus on the fun ahead.</p>
  <p>Plus, our curated tours are designed by local experts to give 
  you an authentic taste of each destination. Don’t miss out on exclusive deals and personalized recommendations 
  tailored just for you. Ready to make memories that last a lifetime? Download our app and start your adventure today! 🚀🏞️</p>
  <button className="userpagebutton searchdest" onClick={()=>window.scrollTo(0,0)}>Search Destination</button>
</div>
    </div>
    <div className="useradd2 useradd1">
    <div className=" plane2">
      <img src="https://images.pexels.com/photos/3027216/pexels-photo-3027216.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='potraitimage' />
    </div>
    <div className="rightplane plane2">
      <h1 style={{width:"60%",marginTop:"30%"}}>Make Your Tour Memorable and Safe With Us</h1>
      <p style={{width:"70%",marginBottom:"7%"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
        there live the blind texts. Separated they live in Bookmarksgrove right at the 
        coast of the Semantics, a large language ocean.</p>
        <div className="stories">
          <div><h2>300</h2>
          <h5>Successful Tours</h5></div>
          <div>
          <h2>24000</h2>
          <h5>Happy Tourist</h5>
          </div>
          <div>
          <h2>200</h2>
          <h5>Place Explored</h5>
          </div>
        </div>
    </div>
    </div>
</>
}
export default Detailspage