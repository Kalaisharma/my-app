import { clientCall } from "../Client/axiosCall";

export const getRegions=async()=>{
    try{
    const response=await clientCall("https://tour-agency-application.netlify.app//myAdmin/getRegions","GET")
    return response
    }
    catch(error){
        console.log(error,"service");
        throw error
    }
}
export const getPlaces=async(id:number)=>{
    try{
    const response=await clientCall("https://tour-agency-application.netlify.app//myAdmin/getPlaces","Post",{regionid:id})
    return response
    }
    catch(error){
        console.log(error,"service");
        throw error
    }
}