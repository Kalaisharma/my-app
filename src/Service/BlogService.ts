import { clientCall } from "../Client/axiosCall"

export const getblogdata=async()=>{
    try{
const response=await clientCall("https://tour-agency-application.netlify.app//myAdmin/blogpost","GET")
console.log(response);

return response}
catch(error){
    console.log(error);
throw error
}
}
//http://localhost:8080