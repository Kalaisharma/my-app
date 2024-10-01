import { clientCall } from "../Client/axiosCall"

export const getblogdata=async()=>{
    try{
const response=await clientCall("http://localhost:8080/myAdmin/blogpost","GET")
console.log(response);

return response}
catch(error){
    console.log(error);
throw error
}
}