import { clientCall } from "../Client/axiosCall"
import { emailtype, LogindataType } from "../Interfaces/Interface";

export const postData=async(formdata:LogindataType)=>{
try{const response=await clientCall("https://mynodeapp-production.up.railway.app/myAdmin/postData","POST",formdata)
return response}
catch(error){
    console.log(error);
    throw error 
}
}
export const getMembership=async()=>{
    const response=await clientCall("https://mynodeapp-production.up.railway.app/myAdmin/getMembership","GET")
    return response
}
export const checklogin=async(formdata:LogindataType)=>{
    try{
    const response=await clientCall("https://mynodeapp-production.up.railway.app/myAdmin/checkLogin","POST",formdata)
    return response
    }
    catch(error){
        console.log(error,"service");
        throw error
    }
}
export const emailExist=async(formdata:emailtype)=>{
    try{
    const response=await clientCall("https://mynodeapp-production.up.railway.app/myAdmin/emailExist","POST",formdata)
    return response
    }
    catch(error){
        console.log(error,"service");
        throw error
    }
}
export const updatepassword=async(formdata:LogindataType)=>{
    try{
    const response=await clientCall("https://mynodeapp-production.up.railway.app/myAdmin/updatepassword","POST",formdata)
    return response
    }
    catch(error){
        console.log(error,"service");
        throw error
    }
}
export const bookingTour=async(data:any)=>{
    try{    
    const response=await clientCall("https://mynodeapp-production.up.railway.app/myAdmin/bookingtour","POST",data)
    return response
    }
    catch(error){
        console.log(error,"service");
        throw error
    }
}