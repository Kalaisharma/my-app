import React, { useContext, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Internal CSS/hearticon.css'
import { MyContext } from '../App';

const HeartIcon = () => {
    const [liked, setLiked] = useState(false);
    const context = useContext(MyContext);
     if (!context) { //because your context may also be undefined
    throw new Error('MyComponent must be used within a MyProvider');
  }
const{email}=context
    const toggleLike = () => {
        if(email!==""){
        setLiked(!liked);
        if(!liked){
            sessionStorage.setItem('visible',JSON.stringify(true))
        }else{
            sessionStorage.setItem('visible',JSON.stringify(false))
        }
    }
    };

    return (
        <i 
            className={`fa-heart ${liked ? 'fas pop' : 'far '}`} 
            onClick={toggleLike} 
            style={{ cursor: 'pointer', color: liked ? 'red' : 'grey', fontSize: '24px' }}
        ></i>
    );
};

export default HeartIcon;
