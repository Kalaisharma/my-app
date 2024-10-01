import { useContext, useEffect, useRef, useState } from "react";
import { bookingTour, getMembership } from "../Service/Formservice";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import { Card } from "react-bootstrap";
import HeartIcon from "./HeartIcon";
import { getMembershipData, getTourData } from "../Service/TourService";
const Booking = () => {
  const [bookingdata, setbookingdata] = useState({
    membership: "",
    city: "",
    accountType: "",
    childcount: 0,
    adultcount: 0,
    packagetype: "",
    startdate: "",
    enddate: "",
  });
  const [boolean, setboolean] = useState({
    membership: false,
    city: false,
    accountType: false,
    count: false,
    packagetype: false,
    startdate: false,
  });
  const context = useContext(MyContext);
   if (!context) { //because your context may also be undefined
    throw new Error('MyComponent must be used within a MyProvider');
  }
  const {email} = context;
  useEffect(() => {
    membershipData();
    if (bookingdata.membership !== "") {
      tourdata();
    }
    if (bookingdata.city !== "") {
      getMembershipdata();
    }
  }, [bookingdata]);
 
  const navigate = useNavigate();
  const [tourview, settourview] = useState(false);
    const [dateview, setdateview] = useState(false);
  const [packageview, setpackageview] = useState(false);
  const [duration, setduration] = useState<string | null>("");
  const [cityid, setcityid] = useState(0);
  const handleChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setbookingdata({ ...bookingdata, [name]: value });
    setboolean({ ...boolean, [name]: false });
    if (name === "startdate" && value !== "" && duration !== "") {
      // let days = parseInt(duration.match(/\d+ Days/)[0]!.match(/\d+/)![0]!);
      let days=0
      if (duration) {
  const match = duration.match(/\d+ Days/);
  if (match) {
     days = parseInt(match[0]!.match(/\d+/)![0]!);
    console.log(days);
  } else {
    console.error("No match found for 'Days'");
  }
} else {
  console.error("Duration is null");
}
      let givenDate = new Date(value); // Example date
      givenDate.setDate(givenDate.getDate() + days);

      let year = givenDate.getFullYear();
      let month = String(givenDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      let day = String(givenDate.getDate()).padStart(2, "0");

      let formattedDate = `${year}-${month}-${day}`;
      console.log(formattedDate, "onchange date format"); // Output: "2024-09-27"
      setbookingdata((prevstate) => ({ ...prevstate, enddate: formattedDate }));
    }
    if (name === "membership" && value !== "") {
      settourview(true);
      setdateview(true);
    }
  };
  const [membership, setmembership] = useState([]);
  const membershipData = async () => {
    const response = await getMembership();
    if (response?.status === 200) {
      setmembership(response?.data);
    }
  };
  const MembershipBinding = () => {
    return membership?.map((el:any) => {
      return (
        <option value={el.Membership} id={el.membershipId}>
          {el.Membership}
        </option>
      );
    });
  };
  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === "adultcount+") {
      setboolean((prevstate) => ({ ...prevstate, count: false }));
      let count1 = bookingdata.adultcount;
      setbookingdata({ ...bookingdata, adultcount: count1 + 1 });
    }
    if (e.currentTarget.name === "adultcount-") {
      let count1 = bookingdata.adultcount;
      if (count1 === 0) {
        setbookingdata({ ...bookingdata, adultcount: 0 });
      } else {
        setbookingdata({ ...bookingdata, adultcount: count1 - 1 });
      }
    }
    if (e.currentTarget.name === "childcount+") {
      let count1 = bookingdata.childcount;
      setbookingdata({ ...bookingdata, childcount: count1 + 1 });
    }
    if (e.currentTarget.name === "childcount-") {
      let count1 = bookingdata.childcount;
      if (count1 === 0) {
        setbookingdata({ ...bookingdata, childcount: 0 });
      } else {
        setbookingdata({ ...bookingdata, childcount: count1 - 1 });
      }
    }
  };
  const handleSubmit = async () => {
    let checkStatus = true;
    if (bookingdata.membership === "") {
      setboolean((prevstate) => ({ ...prevstate, membership: true }));
      checkStatus = false;
    }
    if (bookingdata.accountType === "") {
      setboolean((prevstate) => ({ ...prevstate, accountType: true }));
      checkStatus = false;
    }
    if (bookingdata.city === "") {
      setboolean((prevstate) => ({ ...prevstate, city: true }));
      checkStatus = false;
    }
    if (bookingdata.adultcount === 0) {
      setboolean((prevstate) => ({ ...prevstate, count: true }));
      checkStatus = false;
    }
    if (bookingdata.packagetype === "") {
      setboolean((prevstate) => ({ ...prevstate, packagetype: true }));
      checkStatus = false;
    }
    if (bookingdata.startdate === "") {
      setboolean((prevstate) => ({ ...prevstate, startdate: true }));
      checkStatus = false;
    }
    if (checkStatus) {
      const data = {
        membership: bookingdata.membership,
        city: bookingdata.city,
        enddate: bookingdata.enddate,
        startdate: bookingdata.startdate,
        adultcount: bookingdata.adultcount,
        childcount: bookingdata.childcount,
        accountType: bookingdata.accountType,
        packagetype: bookingdata.packagetype,
        email: email,
      };
      console.log(data, "ggggggggggggggggggggggggggggggggggg");

      const response = await bookingTour(data);
      if (response?.status === 200) {
        handleReset();
        navigate("/bookingcard");
      }
    }
  };
  const handleReset = () => {
    setbookingdata({
      membership: "",
      city: "",
      accountType: "",
      childcount: 0,
      adultcount: 0,
      packagetype: "",
      startdate: "",
      enddate: "",
    });
  };
  const changetheplace = () => {
    if (bookingdata.membership !== "") {
      settourview(true);
    }
  };

  const [gettourdata, settourdata] = useState([]);

  const tourdata = async () => {
    let trimmedStr = bookingdata?.membership?.replace(/\s+/g, "").trim();
    console.log(trimmedStr, "trim");
    const response = await getTourData(trimmedStr);
    settourdata(response.data);
  };
  const getPlaceName = (cityname:string, placeid:number) => {
    setbookingdata({ ...bookingdata, city: cityname });
    setcityid(placeid);
    setpackageview(true);
    settourview(false);
  };
  function liked() {}
  const tourbinding = () => {
    return gettourdata.map((el:any) => {
      if (bookingdata.membership === "City and Beaches")
        return (
          <>
            <Card className="Card">
              <Card.Img
                variant="top"
                src={el.cityimghref}
                className="cardimg"
              />
              <Card.Body className="cardbody">
                <Card.Title className="cardtitle">{el.cityname}</Card.Title>
                <Card.Title className="heart" onClick={liked}>
                  <HeartIcon />
                </Card.Title>
                <Card.Text className="cardtext">{el.citycontent}</Card.Text>
                <Card.Footer
                  className="click"
                  onClick={() => {
                    getPlaceName(el.cityname, el.placeId);
                  }}
                >
                  <button className="clickbutton">Click Here</button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </>
        );
      if (bookingdata.membership === "Adventurous Forest") {
        return (
          <>
            <Card className="Card">
              <Card.Img variant="top" src={el.forestimg} className="cardimg" />
              <Card.Body className="cardbody">
                <Card.Title className="cardtitle">{el.forestname}</Card.Title>
                <Card.Title className="heart" onClick={liked}>
                  <HeartIcon />
                </Card.Title>
                <Card.Text className="cardtext">{el.forestdesc}</Card.Text>
                <Card.Footer
                  className="click"
                  onClick={() => {
                    getPlaceName(el.forestname, el.placeId);
                  }}
                >
                  <button className="clickbutton">Click Here</button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </>
        );
      }
      if (bookingdata.membership === "Hill Station") {
        return (
          <>
            <Card className="card">
              <Card.Img
                variant="top"
                src={el.hillstationimg}
                className="cardimg"
              />
              <Card.Body className="cardbody">
                <Card.Title className="cardtitle">
                  {el.hillstationname}
                </Card.Title>
                {/* <Card.Title className='heart' onClick={liked}><HeartIcon/></Card.Title> */}
                <Card.Text className="cardtext">{el.hillstationdesc}</Card.Text>
                <Card.Footer
                  className="click"
                  onClick={() => {
                    getPlaceName(el.hillstationname, el.placeId);
                  }}
                >
                  <button className="clickbutton">Click Here</button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </>
        );
      }
    });
  };

  const [membershipdata, setmembershipdata] = useState([]);

  const getMembershipdata = async () => {
    const response = await getMembershipData(cityid);
    if (response?.status === 200) {
      setmembershipdata(response.data);
    }
  };
  const toBooking = (packagename:string, days:string) => {
    setpackageview(false);
    settourview(false);
    setduration(days);
    setbookingdata({ ...bookingdata, packagetype: packagename });
  };

  return (
    <>
      {!tourview && !packageview && (
        <div className="bookingcontainer">
          <h1 className="placetag bookatour">Book a Tour!</h1>
          <div className="bookingbox">
            <div className="bookingrows">
              <div>
                <label className="label">
                  Tour Membership:<span style={{ color: "red" }}>*</span>
                </label>
                <select
                  name="membership"
                  value={bookingdata.membership}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">Select</option>
                  {MembershipBinding()}
                </select>
                <span className="changetheplace" onClick={changetheplace}>
                  Change the place?
                </span>
                {boolean.membership ? (
                  <span className="errorspan">Membership is required</span>
                ) : (
                  <></>
                )}
              </div>
              <div>
                <label className="label">
                  Place:<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter the city"
                  value={bookingdata.city}
                  onChange={handleChange}
                  className="input"
                  style={{ pointerEvents: "none" }}
                />
                {boolean.city ? (
                  <span className="errorspan">Place is required</span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="bookingrows">
              <div>
                <label className="label">
                  Tour Type:<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="radio"
                  name="accountType"
                  value="Personal"
                  onChange={handleChange}
                  style={{ width: "15px", height: "15px" }}
                  id="per"
                  checked={bookingdata.accountType === "Personal"}
                />
                <label htmlFor="per" style={{ marginRight: "5%" }}>
                  {" "}
                  Personal{" "}
                </label>
                <input
                  type="radio"
                  name="accountType"
                  value="Business"
                  onChange={handleChange}
                  style={{ width: "15px", height: "15px" }}
                  id="buss"
                  checked={bookingdata.accountType === "Business"}
                />
                <label htmlFor="buss"> Business </label>
                {boolean.accountType ? (
                  <span className="errorspan">Tour Type is required</span>
                ) : (
                  <></>
                )}
              </div>
              <div>
                <label className="label">
                  Passenger Count:<span style={{ color: "red" }}>*</span>
                </label>
                <span className="counthead">Adult</span>
                <button
                  onClick={handleClick}
                  name="adultcount-"
                  className="valuebutton"
                >
                  -
                </button>
                <span className="count">{bookingdata.adultcount}</span>
                <button
                  onClick={handleClick}
                  name="adultcount+"
                  className="valuebutton"
                >
                  +
                </button>
                <span className="counthead">Child</span>
                <button
                  onClick={handleClick}
                  name="childcount-"
                  className="valuebutton"
                >
                  -
                </button>
                <span className="count">{bookingdata.childcount}</span>
                <button
                  onClick={handleClick}
                  name="childcount+"
                  className="valuebutton"
                >
                  +
                </button>
                {boolean.count ? (
                  <span className="errorspan">Count is required</span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="bookingrows">
              <div>
                <label className="label">
                  Package Type:<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  name="packagetype"
                  placeholder="Enter the package type"
                  value={bookingdata.packagetype}
                  onChange={handleChange}
                  className="input"
                />
                {boolean.packagetype ? (
                  <span className="errorspan">Package type is required</span>
                ) : (
                  <></>
                )}
              </div>
              {dateview && <div className="datesection">
                <div className="startdate">
                  <label htmlFor="startdate" className="label">
                    Start Date:<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="date"
                    name="startdate"
                    id="startdate"
                    className="input"
                    value={bookingdata.startdate}
                    onChange={handleChange}
                  />
                </div>
                <div className="enddate">
                  <label htmlFor="enddate" className="label">
                    End Date:<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="date"
                    name="enddate"
                    id="enddate"
                    className="input"
                    value={bookingdata.enddate}
                    onChange={handleChange}
                    style={{ pointerEvents: "none" }}
                  />
                </div>
                {boolean.startdate ? (
                  <span className="errorspan" style={{ top: "100%" }}>
                    Date is required
                  </span>
                ) : (
                  <></>
                )}
              </div>}
            </div>
            <div className="bookingbutton">
              <button onClick={handleSubmit}> Submit</button>
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      )}
      {tourview && (
        <div>
          <div style={{ backgroundColor: "#181C14", color: "white" }}>
            {bookingdata.membership && (
              <h1 style={{ margin: "0px", textAlign: "center" }}>
                {bookingdata.membership}
              </h1>
            )}
          </div>
          <div className="tourgrid">{tourbinding()}</div>
        </div>
      )}
      {packageview && (
        <div className="packagecontainer">
          <h1 className="placetag">{bookingdata.city} Membership</h1>
          <div className="packageinnercontainer">
            {membershipdata.map((pkg:any) => (
              <div
                key={pkg.PackageID}
                className="membershipcontainer"
                onClick={() => toBooking(pkg.PackageName, pkg.Duration)}
              >
                <img src={pkg.imgsrc} alt="" className="packageimg" />
                <h2 className="PackageName">{pkg.PackageName}</h2>
                <p>Duration: {pkg.Duration}</p>
                <p>Price: ₹{pkg.Price}</p>

                <h3>Inclusions:</h3>
                <ul>
                  {pkg.Inclusions.split(";").map((inclusion:string, index:number) => {
                    const [heading, ...details] = inclusion.split(":");
                    return (
                      <li key={index}>
                        <strong>{heading.trim()}:</strong>
                        {details.join(":")}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Booking;
