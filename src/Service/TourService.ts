import { clientCall } from "../Client/axiosCall";
import { favdata, removefavtype } from "../Interfaces/Interface";

export const getTourData = async (membership:string) => {
  const response = await clientCall(
    "http://localhost:8080/myAdmin/getTourData",
    "POST",
    { membershipvalue: membership }
  );
  return response;
};
export const getMembershipData = async (membershipID:number) => {
  const response = await clientCall(
    "http://localhost:8080/myAdmin/getmembershipdata",
    "POST",
    { membershipvalue: membershipID }
  );
  return response;
};
export const getCity = async (id:string) => {
  const response = await clientCall(
    "http://localhost:8080/myAdmin/getCity",
    "POST",
    { adventure: id }
  );
  return response;
};
export const getDestination = async () => {
  const response = await clientCall(
    "http://localhost:8080/myAdmin/getdestinations",
    "GET"
  );
  return response;
};
export const getFavourites = async (el:favdata) => {
  const response = await clientCall(
    "http://localhost:8080/myAdmin/addFavourites",
    "POST",
    { data: el }
  );
  return response;
};
export const userFavourites = async (email:string) => {
  try {
    const response = await clientCall(
      "http://localhost:8080/myAdmin/getFavourites",
      "POST",
      { mail: email }
    );
    return response;
  } catch (error) {
    console.log(error, "service");
    throw error;
  }
};
export const removeFavourites = async (data:removefavtype) => {
  try {
    const response = await clientCall(
      "http://localhost:8080/myAdmin/removeFavourites",
      "POST",
      { mydata: data }
    );
    return response;
  } catch (error) {
    console.log(error, "service");
    throw error;
  }
};
export const myBookings = async (email:string) => {
  try {
    const response = await clientCall(
      "http://localhost:8080/myAdmin/getBookings",
      "POST",
      { mydata: email }
    );
    return response;
  } catch (error) {
    console.log(error, "service");
    throw error;
  }
};
