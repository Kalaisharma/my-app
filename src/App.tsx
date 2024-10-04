import './App.css';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Loginpage';
import { MyContextType, VisibleContextType, VisibleRemoveContextType } from './Interfaces/Interface';
import UserPage from './Components/Userpage';
import Aboutpage from './Components/AboutPage';
import Destination from './Components/Destination';
import Favourites from './Components/Favourites';
import TipsandBlogs from './Components/Blog';
import Contact from './Components/Contact';
import Booking from './Components/BookingForm';
import Bookingcard from './Components/Bookingcard';
import Videopage from './Components/Videopage';
import Myform from './Components/MyFormComponent';
import Forgotpassword from './Components/Forgotpassword';
import NewPassword from './Components/NewPassword';
import InterUser from './Components/InternationalUserPage';
export const MyContext = createContext<MyContextType | undefined>(undefined);
export const VisibleContext = createContext<VisibleContextType | undefined>(undefined);
export const VisibleRemoveContext = createContext<VisibleRemoveContextType | undefined>(undefined);
function App() {
 const [email, setemail] = useState<string | ''>(():string=> {
    return sessionStorage.getItem('email') || '';
});
  const[visible,setvisible]=useState<boolean>(false)
  const[visibleremove,setvisibleremove]=useState<boolean>(false)
  return (
    <MyContext.Provider value={{ email, setemail }}>
      <VisibleContext.Provider value={{ visible, setvisible }}>
        <VisibleRemoveContext.Provider
          value={{ visibleremove, setvisibleremove }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<UserPage />} />
              <Route path="/about" element={<Aboutpage />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="/fav" element={<Favourites />} />
              <Route path="/blog" element={<TipsandBlogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/bookingcard" element={<Bookingcard />} />
              <Route path="/video" element={<Videopage />} />
              <Route path="/signup" element={<Myform />} />
              {/* <Route path="/grid" element={<MyGrid />} /> */}

              <Route path="/forgotpassword" element={<Forgotpassword />} />
              <Route path="/newpassword" element={<NewPassword />} />
              <Route path="/interuser" element={<InterUser />} />
            </Routes>
          </BrowserRouter>
        </VisibleRemoveContext.Provider>
      </VisibleContext.Provider>
    </MyContext.Provider>
  );
}

export default App;
