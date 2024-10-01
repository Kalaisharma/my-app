import axios from "axios"
export const clientCall=async(url:string,method:string,payload:any=null)=>{
    try{
    const config={
        url:url,
        method:method,
        data:payload
    }
    console.log("ftfgufuhjfjfhggfhj");
    
    const response=await axios(config)
    return response}
    catch(error){
        console.log(error,"client");
        throw error
    }
}