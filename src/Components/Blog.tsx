import { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { getblogdata } from "../Service/BlogService";
import { useNavigate } from "react-router-dom";
import userpagelogo from "../Assets/Designer.png";
import FooterComponent from "./Common Components/FooterPage";
import { MyContext } from "../App";
const TipsandBlogs = () => {
  const [blogdata, setblogdata] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getdata();
  }, []);
  const scroller = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const one = useRef<HTMLSpanElement>(null);
  const two = useRef<HTMLSpanElement>(null);
  const three = useRef<HTMLSpanElement>(null);
  const getdata = async () => {
    const response = await getblogdata();
    if (response?.status === 200) {
      console.log(response.data, "lllll");
      setblogdata(response.data);
    }
  };
  const chunkData = (blogdata:any, chunkSize:number) => {
    let chunks = [];
    for (let i = 0; i < blogdata.length; i += chunkSize) {
      chunks.push(
        <>
          <div className="blogpostcontainer">
            <div className="blogposts">
              <img src={blogdata[i].imgsrc} alt="" />
              <h1>{blogdata[i].heading}</h1>
              <h4>{blogdata[i].content}</h4>
            </div>
            <div className="blogposts">
              <img src={blogdata[i + 1].imgsrc} alt="" />
              <h1>{blogdata[i + 1].heading}</h1>
              <h4>{blogdata[i + 1].content}</h4>
            </div>
            <div className="blogposts">
              <img src={blogdata[i + 2].imgsrc} alt="" />
              <h1>{blogdata[i + 2].heading}</h1>
              <h4>{blogdata[i + 2].content}</h4>
            </div>
            <div className="blogposts">
              <img src={blogdata[i + 3].imgsrc} alt="" />
              <h1>{blogdata[i + 3].heading}</h1>
              <h4>{blogdata[i + 3].content}</h4>
            </div>
            <div className="blogposts">
              <img src={blogdata[i + 4].imgsrc} alt="" />
              <h1>{blogdata[i + 4].heading}</h1>
              <h4>{blogdata[i + 4].content}</h4>
            </div>
            <div className="blogposts">
              <img src={blogdata[i + 5].imgsrc} alt="" />
              <h1>{blogdata[i + 5].heading}</h1>
              <h4>{blogdata[i + 5].content}</h4>
            </div>
          </div>
        </>
      );
    }
    return chunks;
  };
  const [count, setcount] = useState(1);
  const moveTo = (e:React.MouseEvent<HTMLSpanElement>) => {
    const name = e.currentTarget.getAttribute("id");
    if (name === "one" && one.current && two.current && three.current) {
      if (count === 2 && scroller.current) {
        scroller.current.scrollLeft -= 1220;
        scroller.current.style.scrollBehavior = "smooth";
      } else {
        if (count === 3 && scroller.current) {
          scroller.current.scrollLeft -= 2440;
          scroller.current.style.scrollBehavior = "smooth";
        }
      }
      setcount(1);
      one.current.style.backgroundColor = "orange";
      two.current.style.backgroundColor = "transparent";
      three.current.style.backgroundColor = "transparent";
    }
    if (name === "two" && one.current && two.current && three.current) {
      if (count === 1 && scroller.current) {
        setcount(2);
        scroller.current.scrollLeft += 1220;
        scroller.current.style.scrollBehavior = "smooth";
      } else {
        if (count === 3 && scroller.current) {
          scroller.current.scrollLeft -= 1220;
          scroller.current.style.scrollBehavior = "smooth";
        }
      }
      two.current.style.backgroundColor = "orange";
      one.current.style.backgroundColor = "transparent";
      three.current.style.backgroundColor = "transparent";
    }
    if (name === "three" && scroller.current && one.current && two.current && three.current) {
      setcount(3);
      scroller.current.scrollLeft += 2440;
      scroller.current.style.scrollBehavior = "smooth";
      three.current.style.backgroundColor = "orange";
      one.current.style.backgroundColor = "transparent";
      two.current.style.backgroundColor = "transparent";
    }
    if (name === "toRight" && scroller.current && one.current && two.current && three.current) {
      if (count === 3) {
        setcount(2);
        two.current.style.backgroundColor = "orange";
        one.current.style.backgroundColor = "transparent";
        three.current.style.backgroundColor = "transparent";
      } else {
        if (count === 2) {
          setcount(1);
          three.current.style.backgroundColor = "tranparent";
          one.current.style.backgroundColor = "orange";
          two.current.style.backgroundColor = "transparent";
        }
      }
      scroller.current.style.scrollBehavior = "smooth";
      scroller.current.scrollLeft -= 1220;
    }
    if (name === "toLeft" && scroller.current && one.current && two.current && three.current) {
      if (count === 1) {
        setcount(2);
        two.current.style.backgroundColor = "orange";
        one.current.style.backgroundColor = "transparent";
        three.current.style.backgroundColor = "transparent";
      } else {
        if (count === 2) {
          setcount(3);
          three.current.style.backgroundColor = "orange";
          one.current.style.backgroundColor = "transparent";
          two.current.style.backgroundColor = "transparent";
        }
      }
      scroller.current.style.scrollBehavior = "smooth";
      scroller.current.scrollLeft += 1220;
    }
  };
  const context=useContext(MyContext)
 if (!context) { //because your context may also be undefined
    throw new Error('MyComponent must be used within a MyProvider');
  }
  const { email } =context;
  const onBook = () => {
    if (email !== "") {
      setTimeout(() => {
        navigate("/booking");
      }, 1000);
    } else {
      alert("Please Login");
    }
  };
  return (
    <>
      <div className="header">
        <img src={userpagelogo} alt="logo" className="logo" />
        <nav className="usernavbar">
          <ul>
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
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
            <li style={{ color: "blue" }}>Blog</li>
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
      <div className="aboutpage blogpage">
        <h1 style={{ marginTop: "70vh", fontSize: "3rem" }}>
          Travel Tips & Blogs
        </h1>
        <div>
          <span
            style={{ fontSize: "1.5rem" }}
            onClick={() => {
              navigate("/userpage");
            }}
          >
            Home &gt;
          </span>
          <span style={{ fontSize: "1.5rem" }}>Blogs &gt;</span>
        </div>
      </div>
      <div className="blogcontainer">
        <div className="blogwrapper">
          <div className="blogs" ref={scroller}>
            {chunkData(blogdata, 6)}
          </div>
          <div className="pagenation">
            <span
              id="toLeft"
              onClick={(e) => {
                moveTo(e);
              }}
            >
              --&gt;
            </span>
            <span
              onClick={(e) => {
                moveTo(e);
              }}
              id="one"
              ref={one}
            >
              1
            </span>
            <span
              onClick={(e) => {
                moveTo(e);
              }}
              id="two"
              ref={two}
            >
              2
            </span>
            <span
              onClick={(e) => {
                moveTo(e);
              }}
              id="three"
              ref={three}
            >
              3
            </span>
            <span
              onClick={(e) => {
                moveTo(e);
              }}
              id="toRight"
            >
              &lt;--
            </span>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
};
export default TipsandBlogs;
