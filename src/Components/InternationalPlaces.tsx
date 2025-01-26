import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getPlaces } from '../Service/Internationalservice';
import { useLocation, useNavigate } from 'react-router-dom';

const InternationalPlaces = () => {
    useEffect(() => {
        InterPlaces()
    }, [])
  const location = useLocation();
  const{refid} = location.state;
    const[placedata,setplacedata]=useState([])
  const InterPlaces = async () => {
        const response = await getPlaces(refid);
        if (response?.status == 200) {
            setplacedata(response.data);
        }
    }
    const placebindings = () => {
      console.log(placedata);

      return placedata?.map((place: any, index: number) => {
        return (
          <Carousel.Item key={index} className="carouselitem">
            <img
              className="interimages"
              src={place.countryimg}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption
              style={{ backgroundColor: "rgb(256,256,256,.2)", color: "black" }}
            >
              <h5
                style={{
                  backgroundColor: "whitesmoke",
                }}
              >
                {place.countryname}
              </h5>
              <p
                style={{
                  backgroundColor: "whitesmoke",
                  display: "inline-block",
                }}
              >
                {place.countrydesc}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      });
  };
  const navigate = useNavigate();
    return (
      <>
        <div className="interplacesmain">
          <Carousel
            data-bs-theme="dark"
            interval={null}
            className="carouselplaces"
          >
            {placebindings()}
          </Carousel>
          <h4 onClick={() => navigate("/interuser")} style={{textAlign:"center",margin:"0",padding:"0"}}>Go Back</h4>
        </div>
      </>
    );
}
export default InternationalPlaces;