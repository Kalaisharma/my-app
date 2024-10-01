import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import { myBookings } from "../Service/TourService";
import { useNavigate } from "react-router-dom";

const Bookingcard = () => {
 const context = useContext(MyContext);
   if (!context) { //because your context may also be undefined
    throw new Error('MyComponent must be used within a MyProvider');
  }
  const {email} = context;
  const [bookingcard, setbookingcard] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {   
    const response = await myBookings(email);
    if (response?.status === 200) {
      setbookingcard(response?.data);
    }
  };
const navigate=useNavigate()
  const dataBinding = () => {
    return bookingcard?.map((el:any) => {
      const startdate = new Date(el.startdate);
      const day1 = String(startdate.getDate()).padStart(2, "0");
      const month1 = String(startdate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const year1 = startdate.getFullYear();
      const correctedstartdate = `${day1}-${month1}-${year1}`;
       const enddate = new Date(el.enddate);
       const day2 = String(enddate.getDate()).padStart(2, "0");
       const month2 = String(enddate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
       const year2 = enddate.getFullYear();
       const correctedenddate= `${day2}-${month2}-${year2}`;
      return (
        <>
          <div className="bookingcards">
            <div className="leftcard">
              <label htmlFor="">Destination Type:</label>
              <span>{el.membership}</span>
              <label htmlFor="">Place:</label>
              <span>{el.city}</span>
              <label htmlFor="">Tour Type:</label>
              <span>{el.accountType}</span>
              <label htmlFor="">Package Type:</label>
              <span>{el.packagetype}</span>
            </div>
            <div className="rightcard">
              <div className="countpanel">
                <h4>Passenger Count</h4>
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1320/1320924.png"
                    alt="adult"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/10539/10539200.png"
                    alt="child"
                  />
                  <h5>Adult Count</h5>
                  <h5>Child count</h5>
                  <h5>{el.adultcount}</h5>
                  <h5>{el.childcount}</h5>
                </div>
              </div>
              <div className="countpanel">
                <h4>Trip Date</h4>
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/9234/9234233.png"
                    alt="start"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/9234/9234331.png"
                    alt="end"
                  />
                  <h5>Start Date</h5>
                  <h5>End Date</h5>
                  <h5>{correctedstartdate}</h5>
                  <h5>{correctedenddate}</h5>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  };
    return (
      <>
        <div className="bookingcardcontainer">
          <h1 style={{textAlign:"center"}}>Your Bookings</h1>
          <div className="cardbox">
            {dataBinding()}
          </div>
          <span style={{ textDecoration: "underline" ,cursor:"pointer"}} onClick={()=>navigate('/')}>Go Home</span>
        </div>
      </>
    );
}
export default Bookingcard;