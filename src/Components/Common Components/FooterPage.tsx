const FooterComponent:React.FC=()=>{
return<>
<div className="footercontainer">
   <div className="innerfooter">
   <div className="keytopics">
<h3>Vacation</h3>
<h3>Information</h3><h3>Experience</h3><h3>Have a Questions?</h3>
    </div>
    <div className="keytopicscontent">
        <div className="vacationcontent">
            <span>Far far away, behind the word mountains, far from the places Kashmir and Kanyakumari, there live the blind texts.</span>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/3670/3670127.png" alt="" className="socialmediaicons"/>
                <img src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" alt="" className="socialmediaicons" />
                <img src="https://cdn-icons-png.flaticon.com/128/3670/3670125.png" alt="" className="socialmediaicons" />
            </div>
        </div>
    <div className="Informationcontent">
        <ul className="ulist">
            <li>Online Enquiry</li>
            <li>General Enquiries</li>
            <li>Booking Conditions</li>
            <li>Privacy and Policy</li>
            <li>Refund Policy</li>
            <li>Call Us</li>
        </ul>
    </div>
   <div className="Experiencecontent">
        <ul className="ulist">
            <li> Adventure</li>
            <li>Hotel and Restaurant</li>
            <li>Beach</li>
            <li>Nature</li>
            <li>Camping</li>
            <li>Party</li>
        </ul>
    </div>
    <div className="Questioncontainer">
        <div>
            <img src="https://cdn-icons-png.flaticon.com/128/684/684908.png" alt="" className="questionicons" />
            <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
        </div>
        <div>
            <img src="https://cdn-icons-png.flaticon.com/128/3014/3014736.png" alt="" className="questionicons"/>
            <span>+91 8966737390</span>
        </div>
        <div>
            <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="" className="questionicons"/>
            <span>info@travelbuddy.com</span>
        </div>
    </div>
    </div>
   </div>
<p className="copyright">Copyright ©2024 All rights reserved | Travel Buddy is made with ❤️ by Kalaiselvan</p>
</div>
</>
}
export default FooterComponent;